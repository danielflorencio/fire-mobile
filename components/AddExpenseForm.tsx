import { useState } from "react";
import { Expense } from "../types/expense";
import { categories } from "../data/categories";
import { newDateAdjusted } from "../helpers/dateFilter";

export default function AddExpenseForm({ onAdd }: {onAdd: (expense: Expense) => void}){

    const [dateField, setDateField] = useState('');
    const [categoryField, setCategoryField] = useState('');
    const [titleField, setTitleField] = useState('');
    const [valueField, setValueField] = useState<number>(0);
  
    let categoryKeys: string[] = Object.keys(categories);
  
    const handleAddEvent = () => {
      let errors: string[] = [];
      if(isNaN(new Date(dateField).getTime())) {
        errors.push('Invalid date!');
      }
      if(!categoryKeys.includes(categoryField)) {
        errors.push('Invalid category!');
      }
      if(titleField === '') {
        errors.push('Invalid Title!');
      }
      if(valueField <= 0) {
        errors.push('Invalid value!');
      }
      if(errors.length > 0) {
        alert(errors.join("\n"));
      } else {
        onAdd({
          date: newDateAdjusted(dateField),
          category: categoryField,
          title: titleField,
          value: valueField
        });
        clearFields();
      }
    }
  
    const clearFields = () => {
      setDateField('');
      setCategoryField('');
      setTitleField('');
      setValueField(0);
    }

    return(
        <>
        </>
    )
}