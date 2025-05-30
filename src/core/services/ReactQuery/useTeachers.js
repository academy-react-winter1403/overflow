import { useQuery } from "@tanstack/react-query";
import { getApi } from "../api/getApi";
import { Getteacherid } from "../api/filterapi/teacerid";

export const useGetTeachers = () => {
  return useQuery({
    queryKey: ["teachers"],
    queryFn: Getteacherid,
  });
};

export const useGetTeacherDetails = (teacherId) => {
  return useQuery({
    queryKey: ["teacherDetails", teacherId],
    queryFn: () => getApi(`/Home/GetTeacherDetails/${teacherId}`),
    enabled: !!teacherId,
  });
};
