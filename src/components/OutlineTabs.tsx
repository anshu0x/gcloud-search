import ReactMarkdown from "react-markdown";
import React from "react";
const OutlineTabs = () => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full grid-outlined md:p-4">
          <ul className="flex mb-0 flex-col border h-full md:w-fit p-4 rounded-lg list-none flex-wrap gap-4">
            <li className="-mb-px font-semibold mr-2 last:mr-0 text-left">
              Outline
            </li>
            <li className="-mb-px mr-2 last:mr-0 md:w-fit text-center">
              <a
                className={
                  "text-xs font-bold p-3  rounded block leading-normal " +
                  (openTab === 1 ? " bg-gray-100" : " bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                href={`#link1`}
              >
                Article
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 md:w-fit text-center">
              <a
                className={
                  "text-xs font-bold p-3  rounded block leading-normal " +
                  (openTab === 2 ? " bg-gray-100" : " bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                href={`#link2`}
              >
                Insight
              </a>
            </li>{" "}
            <li className="-mb-px mr-2 last:mr-0 md:w-fit text-center">
              <a
                className={
                  "text-xs font-bold p-3  rounded block leading-normal " +
                  (openTab === 3 ? " bg-gray-100" : " bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                href={`#link3`}
              >
                Recommendation
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6">
            <div className="p-4 flex-auto">
              <div className="tab-content tab-space bg-gray-100 p-4 rounded-xl overflow-y-auto max-h-96">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <p>
                    <ReactMarkdown
                      children={`News Maersk North America Market Update - May 2023 Share LinkedIn Facebook Twitter Email Copy link WeChat\n\nOcean Updates Our North American gateway terminals are mainly stable at this time, and we have sufficient availability of dry and reefer equipment to cover customer requirements. After the May 1 Labor Day holiday in Asia, we have seen a return of pre-holiday demand levels. Sea-Intelligence reported Maersk as the most reliable carrier in the first quarter of 2023, with schedule reliability of 63.6%.\n\nSome vessels on our services routing into the U.S. East Coast via the Panama Canal have been impacted as a result of low water levels. The Panama Canal Authorityâ\u0080\u0099s May 3 advisory stated that, based on the present and projected level of Gatun Lake for the upcoming weeks, effective May 30, the maximum authorized draft allowed for vessels transiting the Neopanamax locks will be 44 feet. This latest reduction reflects a drop of 5â\u0080\u00996â\u0080\u009d since restrictions were first announced on March 1. The Authority reported in mid-April that precipitation in the Canal watershed was approximately 70% below the historical average. In compliance with the draft restrictions, we have adjusted network planning and vessel loading accordingly. We have also secured an extra loader for additional capacity into the U.S. East Coast in an effort to reduce impacts to customers.\n\nWe anticipate that the onset of Panamaâ\u0080\u0099s annual rainy season beginning in June may bring much needed relief and a gradual reduction in draft restrictions. Port Highlights Our Ocean Team reports that vessel schedules and terminals remain fairly stable and fluid. Overall, there is minimal vessel wait times at North American ports. However, many terminals are taking advantage of this lower volume, pre-peak season to conduct routine maintenance, construction, and dredging operations. Charleston is experiencing one day of the waiting time, which can be attributed to dredging activity for all three berths at Wando that is expected to continue for the next couple of weeks. Weekend gates are available with terminal request submissions. In Savannah, we're seeing anywhere from zero to two waiting days, depending on vessel class status. Savannah is undergoing a berth construction project that is contributing to some sporadic delays. Construction is expected to be completed by the end of December. In the Pacific Northwest, we are still seeing around three days of vessel wait time in Vancouver, with eight days on the rail dwell. Seattle continues with Friday gate closures due to activity. There are no significant issues to report in the Pacific Southwest or Gulf coast, other than the note that Houston discontinued Saturday gates as of April 29. To receive the latest updates on your cargo, sign up for ETA notifications or check schedules on Maersk.com.\n\nPRODUCT SPOTLIGHT How Maersk Air Freight benefits your supply chain In a fast-paced and competitive market, your logistics strategy needs to keep evolving, to turn challenges into opportunities. Maersk Air Freight uplift your transposition by an end-to-end supply chain coverage with integrated logistics solutions enabling fewer touch points from origin to destination. Visit our Air Freight information page to learn more!\n\nSpeed Respond to disruptions quicker and deliver urgent time-sensitive goods quickly and efficiently across your global network. Flexibility Cater to dynamic market and seasonal demands and use our wide range of services to fly your business wherever it needs to go.\n\nReliability Ensure timely global deliveries to your consumers, thanks to a streamlined network and high reliability on air cargo timelines. Ease Ensure seamless logistics operations and manage all your global journeys efficiently through a single point of contact.\n\nNeed a quote? Contact us with your origin/destination, desired timeframe, cargo type, carton, or pallet requirements and whether you need a one-off or regular shipments, and our Maersk Air Freight specialists will get back to you ASAP. For more information, visit Maersk.com\n\nLandside Updates â\u0080\u0093 Warehousing and Distribution Go-to-Market Adjustments for the Post Pandemic Marketplace What percentage of sales should be e-commerce vs. offline? This question is top of mind for many Maersk customers as they plan beyond the pandemic.\n\nBusinesses that weren't selling direct to consumers during the pandemic missed a significant opportunity. According to Forbes, e-commerce sales in 2021 had risen 50% over 2019 sales. Today, with the ebbing of the health crisis, the growth of e-commerce has slowed. However, e-commerce is still expected to strengthen globally over time as more people become comfortable ordering online, mobile devices proliferate, delivery options increase, and transit times to customers decrease. Increasingly, consumers will want hybrid buying experiences where they view products in stores, place online orders, and expect on-time deliveries as promised by the vendor. Given these changing trends, many of our customers are reviewing their go-to-market strategies to effectively balance between \"bricks and mortar\" and direct-to-consumer (D2C) approaches.\n\nSome businesses find they need to do much more to develop their D2C capabilities, while online companies aim to get their products on shelves in stores where foot traffic is significant. Each strategy has its marketplace advantages but also particular supply chain and operational requirements. Todayâ\u0080\u0099s consumer wants what they want, where they want it, when they want it. As consumers increasingly expect an omnichannel buying experience, most enterprises need to improve their ability to deliver on at least one of these fronts. While many supply chain functions are common to both \"bricks and mortar\" and D2C channels, there are unique competencies particular to each. Often, companies have well-established practices in one channel as compared to the other, but omnichannel excellence requires proficiency in multiple areas of the supply chain`}
                    />{" "}
                  </p>
                </div>
              
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <p>
                    News Maersk Asia Pacific market update (December 2022) Share
                    LinkedIn Facebook Twitter Email Copy link WeChat\n\nKeep
                    your cargo sailing smoothly, with valuable insights from our
                    Asia-Pacific Market Update for December.\n\nAs 2023
                    approaches, the outlook is more pessimistic than optimistic
                    as the possibility of a global recession weighs on
                    sentiment. Falling trade growth, tighter monetary controls
                    and weakening consumer demand all point to a tougher start
                    to the New Year for the container shipping sector. But there
                    are some bright spots too â\u0080\u0093 port congestion
                    especially in Europe and North America has been eased,
                    largely ending the supply chain bottlenecks and disruption
                    of the last couple of years. China has also lifted virtually
                    all its COVID-19 restrictions after abandoning its
                    zero-COVID-19 policies of the last three years, raising the
                    prospect of a trade resurgence, despite of a foreseeable
                    impact of soaring positive cases. Market Trends Global
                    growth continued to stall in November with key indicators
                    all sliding. The Global Composite Purchasing
                    Managerâ\u0080\u0099s Index (PMI) nudged lower to 48 in
                    November against 49 the previous month while the
                    manufacturing orders-to-inventory ratio also slipped from
                    Octoberâ\u0080\u0099s level suggesting the growth momentum
                    deteriorated further. Manufacturing export order were again
                    flat. Inflationary pressures are still causing concern
                    despite the possibility headline inflation in the US and
                    Europe has peaked due to lower energy prices. Central banks,
                    including the US Fed, continue to raise interest rates to
                    rein in inflation although there are worries such action
                    could plunge leading economies further into recession. Trade
                    Outlook Cargo demand remains weak and this is expected to
                    continue into 2023 due to a combination of high inventory
                    levels and the likelihood of a global recession that could
                    already be underway. Latest figures show container volumes
                    continued to fall in most regions in July-September compared
                    with the same period last year but were particularly weak on
                    European and Asia trades. North American imports and West
                    Central Asia exports were also witnessing certain level of
                    decreasing. Global container volumes fell 4.3% in duce trade
                    friction and promote more global trade.\n\n\n\nWhile we see
                    a slightly stronger booking in pre-CNY, we expect overall
                    demand in January to be flat. Customers tell us they are
                    still suffering from super high DC stock levels and low
                    consumer confidence when it comes to spending. The most
                    critical destination port situation update Key ports
                    update:\n\nBremerhaven - MSC Gate: Yard density is stable at
                    around 73% for dry cargo, 45% for reefer and 61% for IMO
                    density.\n\n\n\nCASABLANCA, MOROCCO: Berth line-up congested
                    delayed l slide in week 49 and the Cobra service will also
                    be delayed in week 1 have a slide in week 1 to reset
                    schedules.\n\n\n\nTo assist customers managing their cargo
                    during the holiday season we recommend they consider our
                    value added services on Maersk Spot where additional
                  </p>
                </div>   <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-500 ">
                      <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                        <tr>
                          <th scope="col" className="px-6 py-3">
                           Key Insights
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Impact towards ONE
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-white border-b ">
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                          >
                            Apple MacBook Pro 17"
                          </th>
                          <td className="px-6 py-4">Silver</td>
                        </tr>
                        <tr className="bg-white border-b ">
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                          >
                            Microsoft Surface Pro
                          </th>
                          <td className="px-6 py-4">White</td>
                        </tr>
                        <tr className="bg-white ">
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                          >
                            Magic Mouse 2
                          </th>
                          <td className="px-6 py-4">Accessories</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OutlineTabs;
