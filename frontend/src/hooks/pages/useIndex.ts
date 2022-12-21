import { useState } from "react";
import { Teacher } from "../../@types/teacher";

const useIndex = () => {
  const [teachersList, setTeachersList] = useState<Teacher[]>([
    {
      id: 1,
      name: 'Teacher 1',
      image: "https://github.com/Rodrigo-Monteiro-Lima.png",
      description: 'Description 1',
      hourly_pay: 100,
    },
    {
      id: 2,
      name: 'Teacher 2',
      image: "https://github.com/Rodrigo-Monteiro-Lima.png",
      description: 'Description 2',
      hourly_pay: 100,
    },
    {
      id: 3,
      name: 'Teacher 3',
      image: "https://github.com/Rodrigo-Monteiro-Lima.png",
      description: 'Description 3',
      hourly_pay: 100,
    },
    {
      id: 4,
      name: 'Teacher 4',
      image: "https://github.com/Rodrigo-Monteiro-Lima.png",
      description: 'Description 4',
      hourly_pay: 90,
    }
  ]);

  return {
      teachersList
  }
}

export default useIndex;
