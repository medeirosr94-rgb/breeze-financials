import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import type { InsertLead } from "@shared/schema";

export function useFormSubmission() {
  const { toast } = useToast();

  const leadMutation = useMutation({
    mutationFn: async (data: InsertLead) => {
      const response = await apiRequest("POST", "/api/leads", data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Success!",
        description: data.message || "We'll contact you within 24 hours to schedule your free audit.",
        variant: "default",
      });
    },
    onError: (error: any) => {
      toast({
        title: "Something went wrong",
        description: error.message || "Please try again or contact us directly.",
        variant: "destructive",
      });
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertLead & { message: string }) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Message sent!",
        description: data.message || "We'll get back to you soon.",
        variant: "default",
      });
    },
    onError: (error: any) => {
      toast({
        title: "Something went wrong",
        description: error.message || "Please try again or contact us directly.",
        variant: "destructive",
      });
    },
  });

  const submitLead = async (data: InsertLead) => {
    await leadMutation.mutateAsync(data);
  };

  const submitContact = async (data: InsertLead & { message: string }) => {
    await contactMutation.mutateAsync(data);
  };

  return {
    submitLead,
    submitContact,
    isLoading: leadMutation.isPending || contactMutation.isPending,
  };
}
