import { useEffect, useState } from "react";
import { Teacher } from "../../@types/teacher";
import { ApiService } from "../../services/ApiService";

export const useIndex = () => {
  const [teachersList, setTeachersList] = useState<Teacher[]>([]);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedTeacher, setSelectedTeacher] = useState<Teacher | null>(null);


  useEffect(() => {
    ApiService.get('/teachers')
    .then((response) => setTeachersList(response.data)).finally(() => setLoading(false))
  }, [])

  return {
      teachersList,
      loading,
      name,
      setName,
      email,
      setEmail,
      selectedTeacher,
      setSelectedTeacher,
  }
}
