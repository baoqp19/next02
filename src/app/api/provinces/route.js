import provinces from "@/data/tinh_tp.json";

export function GET(request) {
  const data = Object.values(provinces);
  data.sort((a, b) => {
    return a.code - b.code;
  });
  return Response.json({ status: "success", data });
}
