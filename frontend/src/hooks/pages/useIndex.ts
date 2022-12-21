import { useEffect, useState } from "react";
import { toast } from "react-toastify";
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

  const bookClass = () => {
    if (selectedTeacher !== null) {
      if(validadeClassData()) {
        ApiService.post(`/teachers/${selectedTeacher.id}/classes`, { name, email }).then(() => {
          setSelectedTeacher(null)
          toast.success('Cadastrado com sucesso');
        }).catch((e) => {
          toast.error(e.response?.data.message);
        });
      } else {
        toast.warning('Preencha os dados corretamente');
      }
    }
    };


  const validadeClassData = () =>{
    return name.length > 0 && email.length > 0;
  };

  return {
      teachersList,
      loading,
      name,
      setName,
      email,
      setEmail,
      selectedTeacher,
      setSelectedTeacher,
      bookClass,
  }
}
