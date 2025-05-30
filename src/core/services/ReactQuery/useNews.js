import { useQuery } from "@tanstack/react-query";
import { getApi } from "../api/getApi";

export const useGetNews = (urlParams) => {
  const URL = `/News?NewsCategoryId=${urlParams.NewsCategoryId}&PageNumber=${urlParams.PageNumber}&RowsOfPage=${urlParams.RowsOfPage}&Query=${urlParams.Query}&SortingCol=${urlParams.SortingCol}&SortType=${urlParams.SortType}`;

  return useQuery({
    queryKey: ["news", urlParams],
    queryFn: () => getApi(URL, "news"),
    enabled: !!urlParams,
  });
};

export const useGetNewsCategories = () => {
  return useQuery({
    queryKey: ["newsCategories"],
    queryFn: () => getApi("/News/GetListNewsCategory"),
  });
};

export const useGetNewsDetails = (id) => {
  return useQuery({
    queryKey: ["newsDetails", id],
    queryFn: () => getApi(`/News/${id}`),
    enabled: !!id,
  });
};

export const useGetSimilarNews = (id) => {
  return useQuery({
    queryKey: ["similarNews", id],
    queryFn: () => getApi(`/News/GetSimilarNews/${id}`),
    enabled: !!id,
  });
};
