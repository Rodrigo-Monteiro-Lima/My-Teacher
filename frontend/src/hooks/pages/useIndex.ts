import { useEffect, useState } from "react";
import { Teacher } from "../../@types/teacher";
import { ApiService } from "../../services/ApiService";

export const useIndex = () => {
  const [teachersList, setTeachersList] = useState<Teacher[]>([]);

  useEffect(() => {
    ApiService.get('/teachers')
    .then((response) => setTeachersList(response.data))
  }, [])

  return {
      teachersList
  }
}
