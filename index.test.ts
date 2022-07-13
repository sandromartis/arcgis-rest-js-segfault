import { request } from "@esri/arcgis-rest-request";

test("SegFaultTest", async () => {
  await request("https://www.arcgis.com/sharing/rest/search", {
    params: { q: "parks" },
  });

  console.log("Request 1 done");

  await request("https://www.arcgis.com/sharing/rest/search", {
    params: { q: "parks" },
  });

  console.log("Request 2 done");

  expect(1).toEqual(1);
});
