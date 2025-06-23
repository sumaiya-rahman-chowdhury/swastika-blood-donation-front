"use client";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { FieldValues, Path, UseFormReturn } from "react-hook-form";

type Option = {
  label: string;
  value: string;
};

type FormSelectFieldProps<T extends FieldValues> = {
  form: UseFormReturn<T>;
  name: Path<T>;
  label: string;
  options: Option[];
  placeholder?: string;
};

export function FormSelectField<T extends FieldValues>({
  form,
  name,
  label,
  options,
  placeholder = "Select",
}: FormSelectFieldProps<T>) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="block text-sm font-medium text-gray-700">
            {label}
          </FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger className="flex mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500">
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent className="rounded-md border-gray-300 bg-white">
              {options?.map((opt) => (
                <SelectItem key={opt.value} value={opt.value}>
                  {opt.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormMessage className="text-red-500 text-xs mt-1" />
        </FormItem>
      )}
    />
  );
}
