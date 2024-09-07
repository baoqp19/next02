"use client";
const provinceApi = `http://localhost:3000/api/provinces`;
const districtApi = `http://localhost:3000/api/district`;
const fetcher = (url) => fetch(url).then((response) => response.json());

import { useState } from "react";
import useSWR from "swr";

const CheckoutPage = () => {
  const [provinceId, setProvinId] = useState();

  const { data: provinces } = useSWR(provinceApi, fetcher);
  const { data: district } = useSWR(
    `${districtApi}?province_id=${provinceId}`,
    fetcher
  );
  console.log(district);
  const handleChangeProvince = (e) => {
    setProvinId(e.target.value);
  };
  console.log(provinceId);

  return (
    <div>
      <select name="" id="" onChange={handleChangeProvince}>
        <option value="">Chon Quận/huyện</option>
        {provinces?.data?.map(({ code, name }) => (
          <option value={code} key={code}>
            {name}
          </option>
        ))}
      </select>
      <select name="" id="">
        <option value="">Chọn Tỉnh/Thành Phố</option>
        {district?.data?.map(({ code, name }) => (
          <option value={code} key={code}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CheckoutPage;
