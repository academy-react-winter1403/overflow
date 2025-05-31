import { useQuery } from "@tanstack/react-query";
import { getApi } from "../api/getApi";

export const useGetCourses = (params) => {
  const queryParams = new URLSearchParams();
  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined && value !== "") {
      queryParams.append(key, value);
    }
  }

  return useQuery({
    queryKey: ["courses", params],
    queryFn: async () => {
      const response = await getApi(
        `/Home/GetCoursesWithPagination?${queryParams.toString()}`,
      );
      // Handle both array and object responses
      return {
        data: Array.isArray(response)
          ? response
          : response?.courseFilterDtos || [],
        totalCount:
          response?.totalCount ||
          (Array.isArray(response) ? response.length : 0),
      };
    },
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
    queryFn: async () => {
      const response = await getApi(
        "/Home/GetCoursesWithPagination?PageNumber=1&RowsOfPage=4&SortingCol=lastUpdate",
      );
      return Array.isArray(response)
        ? response
        : response?.courseFilterDtos || [];
    },
  });
};

export const useGetBestSellers = () => {
  return useQuery({
    queryKey: ["bestSellers"],
    queryFn: async () => {
      const response = await getApi("/Home/GetCoursesTop?Count=4");
      return Array.isArray(response)
        ? response
        : response?.courseFilterDtos || [];
    },
  });
};
