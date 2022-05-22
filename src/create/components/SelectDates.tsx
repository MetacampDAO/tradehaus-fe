import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface SelectDateProps {
  startDate: Date,
  setStartDate: React.Dispatch<React.SetStateAction<Date>>,
  endDate: Date,
  setEndDate: React.Dispatch<React.SetStateAction<Date>>,
  setDateFilled: React.Dispatch<React.SetStateAction<boolean>>,
}

const SelectDate = (props: SelectDateProps) => {
  const todayDate = new Date();
  return (
    <>
      <div className="flex flex-col items-center space-y-4">
        <h1 className="font-bold text-2xl text-gray-700 w-4/6 text-center">Select Dates</h1>
      </div>
      <p className="font-semibold text-base text-gray-700 text-left mt-2">Game Start Date</p>
      <DatePicker className="border-2 rounded-lg w-full h-12 px-4"
        selected={props.startDate}
        onChange={(date) => { if (date) props.setStartDate(date) }}
        minDate={todayDate}
        maxDate={props.endDate} />
      <p className="font-semibold text-base text-gray-700 text-left mt-2">Game End Date</p>
      <DatePicker className="border-2 rounded-lg w-full h-12 px-4"
        selected={props.endDate}
        onChange={(date) => { if (date) props.setEndDate(date) }}
        minDate={props.startDate} />
      <button 
        onClick={() => props.setDateFilled(true)}
        className="w-full py-3 mt-5 bg-indigo-500 rounded-md
                        font-medium text-white uppercase
                        focus:outline-none hover:shadow-none">
        Next
      </button>

    </>
  );
};

export default SelectDate;

