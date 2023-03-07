import type { GetServerSideProps, NextPage } from "next";
import articles from "../contents/articles.json";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="w-full flex flex-col items-center lg:px-24 px-8 py-12">
      <div className="text-center">
        수상할 정도로 큐브를 사랑하는
        <br className="lg:hidden" />이 시대 최고의 컴퓨터 천재
      </div>
      <div className="font-bold text-4xl">Jeehak Yoon</div>
      <div className="ml-2 font-semibold text-2xl">(윤지학)</div>

      <div className="font-bold text-2xl mt-12">🔆그의 업적을 알립니다💯</div>
      <div className="mb-4">※ 그의 놀라운 업적에 눈이 부실 수 있으니 주의해주세요! ※</div>
      <div className="">
        <div className="font-bold text-xl">세계 최고의 천재인 그가 받은 교육...ㄷㄷ</div>
        <div>
          Seoul National University, Seoul, South Korea (Mar 2016 ~){" "}
          <small>B.S. degree expected in Computer Science and Engineering</small>
        </div>
        <div className="font-bold text-xl mt-4">그가 한 일....ㄷㄷㄷㄷㄷ</div>
        <div>
          Ngine Studios, Seoul, South Korea <small>에서 소프트웨어 엔지니어로 일하셨다 😮</small>
          <ul>
            <li className="font-bold">Feature Scoring System</li>
            <ul className="list-disc list-inside">
              <li>Developed ETL pipeline</li>
              <li>Python, Pandas, Zeppelin, AWS EMR and AWS Lambda</li>
            </ul>
            <li className="font-bold">Return Prediction System</li>
            <ul className="list-disc list-inside">
              <li>Researched survival analysis</li>
              <li>Implemented sample model</li>
              <li>C++, Python, Tensorflow and Pandas</li>
            </ul>
            <li className="font-bold">Youtube Trend Analytics</li>
            <ul className="list-disc list-inside">
              <li>Developed Youtube crawler</li>
              <li>TypeScript, AWS EC2 and AWS S3</li>
            </ul>
            <li className="font-bold">NYPC Contest System</li>
            <ul className="list-disc list-inside">
              <li>Developed web backend</li>
              <li>TypeScript and Express</li>
            </ul>
            <li className="font-bold">Nexon Contents Curation Service</li>
            <ul className="list-disc list-inside">
              <li>Developed web backend and ETL pipeline</li>
              <li>Node.js, Scala, Exprees and Zeppelin</li>
            </ul>
          </ul>
          <div className="font-bold text-xl mt-4">너무 많아서 깜!!!!짝 놀라버리는 그의 수상실적 헐~~</div>
          <ul className="list-disc list-inside">
            <li>
              UCPC: 2022 - 4th place, 2021 - 9th place, 2020 - 3rd place, 2019 - 2nd place, 2018 - 5th place, 2016 - 1st
              place
            </li>
            <li>MOBIS Algorithm Competition: 2021- 3rd prize</li>
            <li>
              ACM-ICPC Regionals: 2018 Seoul - 6th place, 2017 Daejeon - 2nd place, 2016 Asia Nha Trang - 1st place,
              2016 Daejeon - 1st place
            </li>
            <li>ACM-ICPC World Finals: 2017 - 3rd place</li>
            <li>Kakao Code Festival: 2018 - 4th prize, 2017 - 3rd prize</li>
            <li>SCPC: 2017 1st prize, 2016 - 2nd prize</li>
            <li>LG CNS Code Monster: 2016 - 1st place</li>
            <li>IOI: 2015 1st place, 2014 - 21st place</li>
            <li>APIO: 2015 1st place, 2014 - 14th place, 2013 - 6th place</li>
            <li>KOI: 2013 - Gold prize</li>
          </ul>
        </div>
      </div>

      <div className="font-bold text-2xl mt-12">📃기사 모음📰</div>
      <div className="mb-4">※ 너무 많아 한 홈페이지에 다 담을 수 없었습니다. ※</div>
      <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-8">
        {articles.map((article, i) => (
          <Link href={article.href} key={i}>
            <div className="w-full flex flex-col gap-2 cursor-pointer hover:scale-90 transition-all">
              <img src={article.image} className="h-56 object-cover" />
              <div className="font-bold text-xl">{article.title}</div>
              <div className="font-medium">{article.description}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
