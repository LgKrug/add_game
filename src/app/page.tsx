"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import logo from "public/logoMais.png";
import Button from "../components/Button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image src={logo} alt="project logo" width={128} height={128} />
      </div>
      <div className={styles.buttons}>
        <Button onClick={() => router.push("/login")} label="Login" />
        <Button onClick={() => router.push("/register")} label="Cadastro" />
      </div>
    </div>
  );
}