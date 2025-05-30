import { useQuery } from "@tanstack/react-query";
import { getApi } from "../api/getApi";

export const useGetCourses = (params) => {
  const queryParams = new URLSearchParams();
  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined && value !== '') {
      queryParams.append(key, value);
    }
  }

  return useQuery({
    queryKey: ["courses", params],
    queryFn: () =>
      getApi(
        `/Home/GetCoursesWithPagination?${queryParams.toString()}`,
        "courseFilterDtos",
      ),
  });
};

export const useGetCourseDetails = (courseId) => {
  return useQuery({
    queryKey: ["courseDetails", courseId],
    queryFn: () => getApi(`/Home/GetCourseDetails?CourseId=${courseId}`),
    enabled: !!courseId,
  });
};

export const useGetNewCourses = () => {
  return useQuery({
    queryKey: ["newCourses"],
    queryFn: () =>
      getApi(
        "/Home/GetCoursesWithPagination?PageNumber=1&RowsOfPage=4&SortingCol=lastUpdate",
        "courseFilterDtos",
      ),
  });
};

export const useGetBestSellers = () => {
  return useQuery({
    queryKey: ["bestSellers"],
    queryFn: () => getApi("/Home/GetCoursesTop?Count=4"),
  });
};
