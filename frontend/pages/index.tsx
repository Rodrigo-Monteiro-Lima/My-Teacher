import { Box } from "@mui/material";
import type { NextPage } from "next";
import List from "../src/components/List";
import { useIndex } from "../src/hooks/pages/useIndex";

 const Home: NextPage = () => {
  const {teachersList, loading} = useIndex();

  if (loading) return <div>Loading...</div>
  return (
    <Box sx={{backgroundColor: 'secondary.main'}}>
      <List teacher={teachersList}/>
    </Box>
  )
}

export default Home;
