import district from "@/data/quan_huyen.json";

export function GET(request) {
  const provinceId = request.nextUrl.searchParams.get("province_id");
  console.log(provinceId);
  if (!provinceId) {  // nếu chưa có id thì false => !false
    return Response.json(
      {
        status: "error",
        message: "Province ID is required",
      },
      {
        status: 400,
      }
    );
  }

  let data = Object.values(district);
  data.sort((a, b) => {
    return a.code - b.code;
  });
  data = data.filter(({parent_code}) => parent_code === provinceId);
  return Response.json(
    { status: "success", data }
    // {
    //   status: 201,
    // }
  );
}
