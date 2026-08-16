/**
 * ENGINEERING BRIEFINGS.
 *
 * Each body is a list of blocks so content can be rearranged without touching
 * JSX. Inside `paragraph` text, **double asterisks** render as bold — see
 * <RichText /> in src/components/RichText.tsx.
 *
 * To add a briefing: append an object here. The `slug` becomes the URL
 * (/engineering/<slug>) and the page is generated automatically.
 *
 * NOTE — the three briefings below are general-audience UAV explainers written in
 * November 2023. None documents Team Foxtrot's own engineering. Adding two or
 * three real briefings (a CARDINAL design retrospective, the Jetson detection
 * pipeline, the umbrella folding mechanism) is the single highest-value content
 * change available to this section. `kind` distinguishes the two.
 */

export type BriefingBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "image"; src: string; alt: string; float?: "left" | "right" };

export type Briefing = {
  slug: string;
  title: string;
  /** Display date, e.g. "November 12, 2023". */
  date: string;
  /** Sort key + <time> attribute. */
  isoDate: string;
  /** Cover image and intro used on listing pages. */
  cover: string;
  excerpt: string;
  /**
   * "primer" — general UAV background.
   * "briefing" — Team Foxtrot's own engineering work.
   */
  kind: "primer" | "briefing";
  /** Pins one item to the top of /engineering and the home page. */
  featured?: boolean;
  body: BriefingBlock[];
};

export const briefings: Briefing[] = [
  {
    slug: "history-and-development-of-uav-technology",
    title: "History and Development of UAV Technology",
    date: "November 12, 2023",
    isoDate: "2023-11-12",
    cover: "/img/old-quadcopter.webp",
    kind: "primer",
    featured: true,
    excerpt:
      "UAVs are becoming more common and well-known among the public, and in the future, they may be widely used for a variety of tasks. However, many people are unaware that UAVs are a relatively old concept that has taken a long time to develop into the well-developed machines known as drones that we have today.",
    body: [
      {
        type: "paragraph",
        text: "UAVs are becoming more common and well-known among the public, and in the future, they may be widely used for a variety of tasks. However, many people are unaware that UAVs are a relatively old concept that has taken a long time to develop into the well-developed machines known as drones that we have today. The first unmanned aerial vehicles (UAVs) appeared in the 1780s. This blog will discuss the earliest UAVs and how they evolved to where we are today, including the first weaponized UAVs and the technology's prospects.",
      },
      { type: "heading", text: "The first ever UAV" },
      {
        type: "image",
        src: "/img/hot-air-balloon.webp",
        alt: "An early hot air balloon",
        float: "right",
      },
      {
        type: "paragraph",
        text: "The Montgolfier brothers in France created the first UAV when they created the first hot air balloon and demonstrated it in public. This isn't usually what people think of when they think of UAVs, but because the hot air balloon was unmanned and flying, it qualifies as a UAV (unmanned aerial vehicle). This just goes to show how old UAV technology is, as well as how far it has progressed since then. It also demonstrates the meaning of the term UAV and how it can mean something very different from what the public believes it to be.",
      },
      { type: "heading", text: "UAVs have been weaponized over the years" },
      {
        type: "paragraph",
        text: "Hot air balloons, like the first UAV, were also the first form of military use of UAVs. In 1849, the Austrian army stored bombs in hot air balloons for their attack on Venice. The bomb was to be dropped after a certain amount of time, which was accomplished through the use of time fuses. Although the attack was not successful due to factors such as wind, it was the first time UAVs were used in a military attack.",
      },
      {
        type: "paragraph",
        text: "After the Wright brothers invented planes in 1903, military UAVs began to resemble the military drones of today. Because victory in WWI required innovation, the war had a significant impact on the development of UAVs. The American Kettering Bug torpedo, a pilotless plane carrying a bomb that would crash and explode, was the most notable development. The old machine used a gyroscope to guide itself to the point where it would crash and explode.",
      },
      {
        type: "paragraph",
        text: "The British also developed a UAV called the Queen Bee in 1935 to aid in the training of Air Force pilots, which was a major issue at the time. The Queen Bee enabled pilots to receive proper training in dogfights while causing no harm to humans. It was the first modern drone and was controlled by a radio controller. Indeed, the Queen Bee was so successful that Americans were inspired by it and began developing similar technology.",
      },
      {
        type: "image",
        src: "/img/curtis-fledgling.webp",
        alt: "The Curtiss Fledgling, an early radio-controlled aircraft",
        float: "left",
      },
      {
        type: "paragraph",
        text: "The Americans went on to develop the Curtiss N2C, a radio-controlled UAV, in 1937. Its limitations included the need to fly a crew nearby in a separate aircraft from where they could control the Curtiss. Drones were used by both the Axis and Allied forces to deliver massive blows to each other during WWII. The majority of the drones used gyroscope readings to control pitch and yaw, and barometer readings to control altitude. Following WWII, the Americans extensively used drones in the Vietnam War. The only difference was that they were mostly used for reconnaissance this time.",
      },
      {
        type: "paragraph",
        text: "Even after all of the advancements mentioned above, drone technology has advanced significantly, and drones such as the iconic predator (developed in 1996, so still relatively new) have been developed. Today's top-tier UAVs include the US Gray Eagle and the Zephyr Stratospheric UAV, which is designed to orbit the Earth in the stratosphere. Stealth technology has also been developed, and the basic purpose of a military UAV, scouting and attacking, has greatly improved to the point where UAVs can deliver strikes halfway around the world.",
      },
      {
        type: "paragraph",
        text: "From a strictly military standpoint, UAVs have the potential to save the lives of military pilots both in training and on the battlefield. Missions that previously required the pilot to risk his life can now be performed by machines, and recon missions can be much more time and cost-efficient because UAVs do not require additional fuel for passengers. To say that UAV technology has changed the way the Air Force operates is an understatement.",
      },
      {
        type: "heading",
        text: "The development of UAVs for photography and scouting",
      },
      {
        type: "image",
        src: "/img/pic-from-rocket-camera.webp",
        alt: "An early aerial photograph taken from a rocket-mounted camera",
        float: "right",
      },
      {
        type: "paragraph",
        text: "One of the most common uses for UAVs, both now as well as back when they were relatively new technology, is in photography. Although the photography applications may have shifted from mostly military scouting missions to quite a lot of cinematography as cameras were further developed and became more common, UAVs for photography are still important to this day. The first practical idea to attach a camera to a UAV was in 1896 when Alfred Nobel filed a patent to attach a camera to a rocket and launch it. The camera would take a picture using a time fuse and parachute back to the ground where the film could be used to produce images. The problem with this technique was that only one photo could be taken per launch.",
      },
      {
        type: "paragraph",
        text: "The British used UAVs to scout behind enemy lines multiple times from an early time. Notably, the first time this was done was in the battle of Neuve Chapelle during the First World War. The Americans also used similar technology for reconnaissance missions later on in World War 2 and in the Vietnam War.",
      },
      {
        type: "paragraph",
        text: "One of the biggest examples of camera drones include FPV drones which were developed by enthusiasts in the 2010s. This developed into the fully-fledged sports we see today. FPV drones show us how far drone photography has come since it has to transmit video feeds to the headset in real-time.",
      },
      { type: "heading", text: "The Drone Enthusiast Community" },
      {
        type: "paragraph",
        text: "All the points mentioned previously have spoken extensively on the development of drones on an industrial level by the military. While those UAVs show the peak of the technology due to extensive funding, the drone community is an integral part of UAVs as a whole. The community started when people developed an interest in the technology that they saw and eventually, people managed to make innovations to drones for their benefit such as making FPV drones or using drones for photography as mentioned above.",
      },
      { type: "heading", text: "Multirotor UAVs" },
      {
        type: "image",
        src: "/img/old-quadcopter.webp",
        alt: "An early quadcopter prototype",
        float: "right",
      },
      {
        type: "paragraph",
        text: "When most people think of drones, the first thing that comes to mind is either the Gray Hawk or multirotor UAVs. The military developed these drones to allow for vertical take-off and landing. The prototypes of this type of drone were built in 1907. Because opposing arms easily balanced each other, the early multirotor UAVs were mostly quadcopters (consisting of four motors and four propellers). However, computers did not exist at the time, and balancing a multirotor UAV was extremely difficult due to the difficulty of having the centre of mass directly in the centre of the copter. As a result, these types of drones were not further developed until computers became powerful enough to self-stabilize them. However, these multicopters are extremely useful nowadays because they are less expensive to build and can perform tasks such as vertical take-off and landing as well as providing extra maneuverability.",
      },
      { type: "heading", text: "Scope of UAVs" },
      {
        type: "paragraph",
        text: "Currently, UAV technology has advanced enough to the point where they are being used for many different purposes worldwide which includes military purposes like they were used conventionally to photography and helping put out wildfires. Drone technology still has a long way to go since even the most advanced drones in the world still face many problems. For example, drones may be able to map routes themselves in the future using AI. In addition to this, the technology may become cheaper. Either way, UAVs will only become more common in the future and be used more widely for purposes such as delivering packages.",
      },
      { type: "heading", text: "Conclusion" },
      {
        type: "paragraph",
        text: "To sum it all up, UAV technology has come a long way since it began in the form of a hot air balloon, and it is still an ever-innovating technology and may be so for a long time. The performance and weaponizing of UAVs were vastly innovated by militaries aiming to gain the upper hand in wars, but a lot of great ideas were sparked by bright minds which allowed people to gain access to entertainment in the form of sports such as FPV drone racing as well as making it easier to perform tasks such as aerial photography.",
      },
    ],
  },
  {
    slug: "how-are-drones-useful-in-real-life",
    title: "How are drones useful in real life?",
    date: "November 11, 2023",
    isoDate: "2023-11-11",
    cover: "/img/drone.webp",
    kind: "primer",
    excerpt:
      "Drones are becoming more and more useful in our lives in different ways every day. By performing jobs that require less risk-taking, as well as saving time and money, people are discovering ways to use drones to make life easier.",
    body: [
      {
        type: "paragraph",
        text: "Drones are becoming more and more useful in our lives in different ways every day. By performing jobs that require less risk-taking, as well as saving time and money, people are discovering ways to use drones to make life easier. Thanks to technological advancements in software, the data collected by drones is so valuable that it can be processed and applied in ways we never imagined. Every day, drones are used in a variety of ways, including as a tool to cut costs. They support farmers, participate in search and rescue operations, and fight criminality. Drones can now handle more difficult tasks as technology advances and grows more sophisticated. Following are a few cases where drones are, and can be used in our daily lives.",
      },
      { type: "heading", text: "1. Search and Rescue (SAR)" },
      {
        type: "paragraph",
        text: "Drone operators are needed to search for missing people, animals, and items. They can do this because they can transport payloads (such as life jackets, ropes, etc.), and by equipping those drones with spotlights or thermal imaging cameras and flying over the areas missing. Worldwide, mountain rescue teams are embracing this contemporary technology and utilising it as opposed to risking their own lives. Since using a helicopter is so expensive, using drones to save costs and perhaps speed up the process makes perfect sense.",
      },
      {
        type: "paragraph",
        text: "Drones are also getting more and more common following a natural disaster. They can fly over the affected area and evaluate the situation while searching for escape routes and potential survivors. Drone used to help distribute buoyancy aids to persons in need is being taught to lifeguards. The hundreds of lives that potentially be saved by this new method of functioning.",
      },
      { type: "heading", text: "2. Agriculture" },
      {
        type: "paragraph",
        text: "Agriculture is notorious for requiring a great deal of labour and yielding little in return. Farmers work incredibly hard every day to support economies and produce the food we consume every day. Therefore, it should not be surprising that one of the industries where drone use is increasing is agriculture. Precision farming is the direction that farming is taking. The goal of precision farming is to use cutting-edge technology to measure, monitor, and react to both crops and animals.",
      },
      {
        type: "paragraph",
        text: "Drone use for crop monitoring, feeding, and spraying is a component of the precision farming strategy. Drones like the Argas T16 from DJI make this possible. This drone can spray 16 litres of liquid onto crops and cover 10 hectares in one hour. That moves along far more quickly than anyone can physically handle. That is only one method. Crops may be monitored by drones with special cameras that can show you whether they are healthy or unhealthy, even which land areas require drainage, and which require water can be determined using the same data.",
      },
      {
        type: "paragraph",
        text: "Drones are also assisting farmers by keeping an eye on their cattle. Animal care is a time-consuming task for farmers. They walk the land checking on animals, keeping an eye on their health and number, and even rounding them up. They either hire staff to do this or do it themselves. Farmers are gaining valuable time back thanks to the use of drones so they can complete other crucial tasks.",
      },
      { type: "heading", text: "3. Deliveries" },
      {
        type: "paragraph",
        text: "The use of drones for deliveries is one of the biggest, longest-running tales. One of the largest online retailers, Amazon, has been leading the charge and aiming to be one of the first delivery services. Other companies are also looking into ways they could supply consumer items. For instance, one of the largest pizza businesses in the world, Dominos, delivered pizzas via drones in New Zealand back in 2016.",
      },
      {
        type: "paragraph",
        text: "If medical supplies, or perhaps even blood and donors, could be delivered by drones has also been raised. Due to the time saved by avoiding traffic, delivery via drone could save even more lives. In 2020, the UK tested a drone delivery service by sending medical supplies from Hampshire to the Isle of Wight during the Coronavirus pandemic (COVID-19).",
      },
      { type: "heading", text: "4. Advertisements" },
      {
        type: "paragraph",
        text: "Advertising companies are constantly seeking methods to stand out in competition by new angles using attention-grabbing techniques. Drones can help in this situation. Advertisers can produce appealing commercials from a variety of angles thanks to their ability to record in 4K. Because they are less expensive than certain conventional approaches, drones are being employed more frequently. Without a UAV, businesses would need to hire additional cameramen and helicopters to get the same views, which would cost more money. Similar to the planes you used to see, groups are using drones to fly while carrying advertising banners in addition to filming. At concerts and festivals, some businesses have been known to drop their products into crowds of attendees using drones. That is a fantastic approach to marketing oneself.",
      },
      { type: "heading", text: "5. Security and Surveillance" },
      {
        type: "paragraph",
        text: "Both technology and the criminal psyche are evolving. Drone use is one approach to get wiser in the security industry, which is necessary as thieves become smarter. Consider a security firm in charge of a 1 km-long, sizable location. A group of security officers would be needed to watch the area around the clock. Additionally, the guards might endanger themselves as accidents take place.",
      },
      {
        type: "paragraph",
        text: "Drones are flown by security drone pilots who check the perimeters within minutes to make security checks safer and faster; this is true even if an alarm has been sounded. The camera on drones is an added advantage. The camera has immediate access to evidence should it be required because it can record what it observes. And since the criminals are aware of this, they will go to whatever lengths to avoid getting caught and are more likely to flee.",
      },
      {
        type: "paragraph",
        text: "Crowd control is another application for drones in monitoring. Most of the time when hundreds or thousands of people congregate, there is calm, but occasionally things start to get heated. With the help of this information, future gatherings may be avoided altogether.",
      },
      { type: "heading", text: "6. Law Enforcement" },
      {
        type: "paragraph",
        text: "Law enforcement agencies all over the world are incorporating drones into their toolkits to assist with routine policing. Here are a few ways that drones are assisting law enforcement.",
      },
      {
        type: "paragraph",
        text: "**After suspects:** when criminals flee on roofs in some parts of the world, it is much simpler to keep an eye on the skies and help catch them. To do just that, drones are being used. Drones are easily accessible and may be deployed in a matter of minutes while swiftly identifying a suspect.",
      },
      {
        type: "paragraph",
        text: "**Criminal scene examinations:** drones are being used to search for additional evidence, which may be difficult to see from the ground, as crime scenes are extremely delicate places when a crime is committed. This helps to reduce cross-contamination on the scene. A drone can also reconstruct a crime scene faster than a terrestrial unit can. Who knows, deploying a drone might even be able to catch a suspect who is nearby but unobserved by workers on the ground.",
      },
      {
        type: "paragraph",
        text: "**Traffic collisions:** by arriving first on the scene and being able to collect data that would previously require a helicopter, drones are assisting law enforcement agencies with collisions. Drones can more quickly collect data, which can then be processed by specialised software to identify the reasons behind accidents. Because they can look for alternate routes, UAVs can also aid in managing traffic after an accident to get it moving as quickly as feasible. For ground units, this may be an impossible task if they become stuck.",
      },
      {
        type: "paragraph",
        text: "**Seizures of drugs:** law enforcement is employing innovative strategies to address this enormous issue as drugs continue to enter countries. To investigate suspicious activity, drones are used because they can do the job more quickly and efficiently than helicopters. Drones are being used on land to track and monitor, and they can do so without the suspect being aware of it.",
      },
      { type: "heading", text: "7. Hollywood Blockbusters" },
      {
        type: "paragraph",
        text: "The use of drones in movies is growing in popularity. They are facilitating artistic expression and capturing scenes that were previously captured by helicopter. They are now the standard tool for automobile and motorcycle scenes, like the one in Skyfall, the James Bond film. The beginning scenes are among the other common drone shots. Consider Lost Boys for an example of a movie from the 1980s or 1990s that featured low-flying images over water that later revealed a city or a carnival. A camera crew aboard a helicopter that was flying slowly was used to capture this. Well, because these photos are now being captured by a drone, cost and time have been significantly reduced thanks to current technology.",
      },
      {
        type: "paragraph",
        text: "Although by no means comprehensive, this list represents some of the most typical applications for drones in daily life. As one can see, drones are highly helpful in a variety of businesses and will only grow in popularity over time. However, one of the biggest disadvantages is people. People are wary of drone activity because they don't know or comprehend it, or because they only read or hear unfavourable headlines about it. As drone use increases and more people learn about the advantages they offer and how they are advancing global good, one can believe drone usage will bring a positive benefit to the world.",
      },
    ],
  },
  {
    slug: "drone-delivery",
    title: "Drone Delivery",
    date: "November 09, 2023",
    isoDate: "2023-11-09",
    cover: "/img/drone-delivery.webp",
    kind: "primer",
    excerpt:
      "Instant deliveries of your online order by means of drone may sound like science fiction, but the drone industry is real and booming. The ever-growing technology of UAVs presents us with many innovative solutions to our everyday problems.",
    body: [
      {
        type: "paragraph",
        text: "Instant deliveries of your online order by means of drone may sound like science fiction, but the drone industry is real and booming. The ever-growing technology of UAVs presents us with many innovative solutions to our everyday problems. Equipped with so many benefits, it is no surprise that the acceptance of drones in the public has dramatically increased in the recent years. Therefore, it was only a matter of time before drones started being utilized for commercial purposes. With the advancing technology, we can now get what we desire within minutes of it leaving warehouses, and without us having to leave our houses. Sure, drone delivery can be frightening at times, but people are adapting quickly to it. I’ll discuss some real-world examples regarding this topic below.",
      },
      {
        type: "paragraph",
        text: "But, before diving into its applications, let’s first understand the technology and methods which makes the drones delivery possible.",
      },
      { type: "heading", text: "What is Drone Delivery and how it works?" },
      {
        type: "paragraph",
        text: "Drone delivery is a new way of delivering products to consumers. Rather than focusing on traditional delivery methods — people delivering via car, bicycle, or truck — this form of delivery gives the responsibility to a drone. Orders are prepared and attached to the drones, and then they fly in the sky somewhere between 200 and 400 feet, with Federal Aviation Administration approval, to deliver to consumers. The drones are autonomous; some operate via satellite, while others rely on sonar sensors, GPS, or cameras to navigate. The drone uses an automated flight controller and GCS (Ground Control Station) collectively to achieve the task. Furthermore, machine learning and computer vision is also applied in this technology. Usually, python is implemented in these models. In most cases, drone pilots oversee all the operations to ensure everything goes accordingly.",
      },
      {
        type: "paragraph",
        text: "Drone Delivery services show enough potential that Amazon, Alphabet, and other tech giants are hailing it as the future of e-commerce fulfillment. Many major retail and logistics companies around the world are testing drone delivery services and drone delivery systems to solve the problem of “last mile” which means “the transit of goods from a transportation station to the ultimate delivery destination” deliveries. And some companies have already taken the first step…",
      },
      { type: "heading", text: "First Drone Delivery – A Domino’s Pizza" },
      {
        type: "paragraph",
        text: "Drone delivery pizza became a reality in November 2016 when Domino’s with its drone delivery partner Flirty, dropped off an order at a customer’s door at 11:19 a.m. in Whangaparaoa, New Zealand, 25 km north of Auckland. (If you’re curious, the first pizza drone delivery was an order of a Peri-Peri Chicken Pizza and a Chicken and Cranberry Pizza.)",
      },
      {
        type: "paragraph",
        text: "A team of drone experts and a pilot autonomously controlled Flirtey’s DRU Drone through GPS navigation to drop off the pizza.",
      },
      { type: "heading", text: "Amazon Drone Delivery" },
      {
        type: "paragraph",
        text: "Pizza drone delivery is one thing, but when the largest e-commerce company in the world starts toying with the idea of using unmanned aerial vehicles (UAVs) to fulfill orders, that’s another story entirely.",
      },
      {
        type: "paragraph",
        text: "A future delivery system from Amazon is designed to safely get packages up to 5 pounds to customers in 30 minutes or less using autonomous aerial vehicles. Prime Air has great potential to enhance the services amazon already provides to millions of customers by providing rapid parcel delivery that will also increase the overall safety and efficiency of the transportation system.",
      },
      {
        type: "paragraph",
        text: "The Prime Air delivery program uses autonomous drones guided by GPS systems. With last mile delivery being the most expensive and time-consuming part of the shipping process, drone delivery has the potential to give Amazon a leg up on other logistics companies.",
      },
      { type: "heading", text: "Alphabet Drone Delivery" },
      {
        type: "paragraph",
        text: "Google-parent Alphabet’s Wing is a drone delivery service in partnership with FedEx and Walgreens. It delivers select FedEx packages as well as health and wellness products, like over-the-counter medicines, from Walgreens.",
      },
      {
        type: "paragraph",
        text: "Wing’s drones deliver packages that weigh between two to three pounds right to customers’ doorsteps. While taking advantage of Wing’s ability to improve speed and cut costs, Alphabet also boasts fuel efficiency as the drones are driven by an all-electric power system.",
      },
      { type: "heading", text: "UPS Drone Delivery" },
      {
        type: "paragraph",
        text: "In 2019 the Federal Aviation Administration (FAA) approved UPS Flight Forward to become the first-ever drone service operating as a commercial airline. Business Insider Intelligence reported that although the drone service can only operate in suburban and rural regions, it has complete autonomy on size and scope of its drone operations.",
      },
      {
        type: "paragraph",
        text: "UPS later teamed up with CVS Pharmacy – indicating that the company is looking to focus its initial drone efforts on medical product delivery.",
      },
      { type: "heading", text: "Delivery Drones Pros & Cons" },
      {
        type: "paragraph",
        text: "Delivery drones have both pros and cons, even though the benefits might be more readily apparent off the bat. Especially in the last mile delivery where companies must meet the demand of consumers wanting faster and cheaper delivery services. Drones offer a faster and more efficient way of delivering goods, especially in rural and remote areas. However, like many industries that adopt a new type of technology, drone delivery systems face some hurdles to their growth and success.",
      },
      { type: "heading", text: "Benefits of Drone Delivery" },
      {
        type: "paragraph",
        text: "**Faster Delivery Times** – Drones are easily deployed, and most drone delivery systems are semi-automated. As soon as the package has been attached, the drone will have all the information it needs from the central command to deliver the package to its destination. Drone flight is completely autonomous and there will be no issues with traffic and congestion. The shortest route will be easily calculated, and customers will get an accurate time of arrival.",
      },
      {
        type: "paragraph",
        text: "**Reduced Costs** – Drones are cheaper to purchase and operate than the traditional methods of transportation for last-mile delivery. And because they are battery powered, there is no expense for fuel. There are also reduced labor costs as the actual drone delivery operation is fully autonomous.",
      },
      {
        type: "paragraph",
        text: "**Easier Delivery to Isolated/Rural Areas** – Drone deliveries have been of huge benefit for rural and hard to reach communities, especially for delivering vital supplies like medicine and lifesaving equipment. Zipline is a drone delivery company that specializes in this area, they have been delivering vital medical supplies in countries like Rwanda and Ghana within 45 minutes of an order being placed. Drones have also been used in to deliver Covid-19 vaccines to many rural communities around the world.",
      },
      {
        type: "paragraph",
        text: "**Good For the Environment** – Logistics companies are always looking at reducing their carbon footprint to help reduce their fuel costs and fight climate change. By using drones in the final part of their supply chain, they can drastically reduce their use of fossil fuels, save costs, and help improve the environment.",
      },
      { type: "heading", text: "Disadvantages of Drone Delivery" },
      {
        type: "paragraph",
        text: "**Initial Costs** – The initial investment in getting the infrastructure for a drone delivery network will be time-consuming and expensive. There will be costs for the drones, building the delivery network, training staff to operate the system and other related costs.",
      },
      {
        type: "paragraph",
        text: "**Only local deliveries** – At the moment even the most powerful drone has a very limited flight time, this is mainly because they are powered by lithium-ion batteries and flight time is limited to around 1 hour and this must include the return journey. Therefore, companies are only providing drone delivery services on a local basis.",
      },
      {
        type: "paragraph",
        text: "**Weather** – Because of their relatively small size when compared to other aircraft, drones will be susceptible to bad weather. Although many of those designed for delivery services have been built to be flown in rainy and cold temperatures, they will be a risk to operate in very windy conditions.",
      },
      {
        type: "paragraph",
        text: "**Hacking** – As these drones will be flow at low-altitude, they will be vulnerable to criminal activity. Some may even try to hack into the drone and take over its control system and divert its destination.",
      },
    ],
  },
];

export function getBriefing(slug: string): Briefing | undefined {
  return briefings.find((b) => b.slug === slug);
}

export const featuredBriefing =
  briefings.find((b) => b.featured) ?? briefings[0];

export const otherBriefings = briefings.filter(
  (b) => b.slug !== featuredBriefing.slug,
);

export type RelatedLink = {
  title: string;
  href: string;
  description: string;
  external?: boolean;
};

/** Curated links — competition campaigns, primers, and official organiser sites. */
export const relatedReading: RelatedLink[] = [
  {
    title: "How are drones useful in real life?",
    href: "/intelligence/how-are-drones-useful-in-real-life",
    description:
      "Civil applications from search-and-rescue and agriculture to law enforcement and cinematography.",
  },
  {
    title: "Drone Delivery",
    href: "/intelligence/drone-delivery",
    description:
      "How autonomous last-mile delivery works — and where Amazon, Wing, and UPS have taken it.",
  },
  {
    title: "SUAS 2024 — Project SPECTRE",
    href: "/timeline#suas-2024",
    description:
      "4th in mission ranking and 11th overall at the AUVSI SUAS Competition in Maryland.",
  },
  {
    title: "SUAS 2023 — Project ALTAIR",
    href: "/timeline#suas-2023",
    description:
      "The team's first AUVSI SUAS campaign — 6th globally with a LiDAR-equipped hexacopter.",
  },
  {
    title: "IMechE UAS Challenge 2024 — CARDINAL",
    href: "/timeline#imeche-2024",
    description:
      "1st place and the Safety & Airworthiness Award at the UK student UAV challenge.",
  },
  {
    title: "AUVSI SUAS Competition",
    href: "https://www.auvsi.org/suas",
    description:
      "Official organiser site — mission rules, autonomous flight tasks, and remote sensing requirements.",
    external: true,
  },
  {
    title: "IMechE UAS Challenge",
    href: "https://uaschallenge.org/",
    description:
      "The UK's annual student UAV design-and-fly competition — documentation, flight tasks, and awards.",
    external: true,
  },
  {
    title: "TEKNOFEST International UAV Competition",
    href: "https://teknofest.org/en/competitions/international-unmanned-aerial-vehicle-competition/",
    description:
      "Official fixed-wing, rotary-wing, and free-mission competition information for international student teams.",
    external: true,
  },
  {
    title: "TEKNOFEST FPV Drone Tracking",
    href: "https://www.teknofest.org/en/announcement/major-competition-for-the-autonomous-drone-systems-of-the-future-applications-for-the-fpv-drone-tracking-competition-are-ongoing/",
    description:
      "A current competition resource focused on autonomous tracking, computer vision, and UAV decision-making.",
    external: true,
  },
];
