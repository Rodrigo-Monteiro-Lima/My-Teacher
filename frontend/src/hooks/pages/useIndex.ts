import { useEffect, useState } from "react";
import { Teacher } from "../../@types/teacher";
import { ApiService } from "../../services/ApiService";

export const useIndex = () => {
  const [teachersList, setTeachersList] = useState<Teacher[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    ApiService.get('/teachers')
    .then((response) => setTeachersList(response.data)).finally(() => setLoading(false))
  }, [])

  return {
      teachersList,
      loading,
  }
}
