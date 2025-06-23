"use client";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FieldValues, UseFormReturn,Path } from "react-hook-form";

type FormInputFieldProps<T extends FieldValues> = {
  form: UseFormReturn<T>;
  name: Path<T>;
  label: string;
  type?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; 
};

export function FormInputField<T extends FieldValues>({
  form,
  name,
  label,
  type = "text",
}: FormInputFieldProps<T>) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="block text-sm font-medium text-gray-700">
            {label}
          </FormLabel>
          <FormControl>
            <Input
              {...field}
              type={type}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
              
            />
          </FormControl>
          <FormMessage className="text-red-500 text-xs mt-1" />
        </FormItem>
      )}
    />
  );
}
