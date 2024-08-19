import Image from "next/image";
import styles from "./page.module.css";
import HomePage from "./home/page";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function Home() {
  return (
 <div>
      <div>
        <div>
          <HomePage/>
        </div>
      </div>
 </div>
  );
}
