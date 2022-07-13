import { request } from "@esri/arcgis-rest-request";

test("SegFaultTest", async () => {
  console.log("Running request 1");

  const result1 = await request("https://www.arcgis.com/sharing/rest/search", {
    params: { q: "parks" },
  });

  console.log("Request 1 done");

  console.log("Running request 2");

  const result2 = await request("https://www.arcgis.com/sharing/rest/search", {
    params: { q: "parks" },
  });

  console.log("Request 2 done");

  expect(1).toEqual(1);
});
