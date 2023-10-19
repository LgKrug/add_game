"use client";

import styles from "../app/styles.module.css"
import Image from "next/image";
import Button from "../components/Button";
import logo from "public/logoMais.png";

import { useRouter } from "next/navigation"; // Alterei de "next/navigation" para "next/router" - utilize o pacote correto

const HomePage = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className="mb-8">
        <Image src={logo} alt="project logo" width={150} height={150} />
      </div>
      <h1 className="text-4xl font-extrabold text-center text-blue-500">
        Bem-vindo ao Seu Jogo de Soma!
      </h1>
      <div className="flex space-x-4 mt-8">
        <div className="px-6 py-3 bg-blue-500 text-white rounded-lg flex items-center">
          <Button onClick={() => router.push("/login")} label="Entrar" />
        </div>
        <div className="px-6 py-3 bg-green-500 text-white rounded-lg flex items-center">
          <Button onClick={() => router.push("/register")} label="Cadastro" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;