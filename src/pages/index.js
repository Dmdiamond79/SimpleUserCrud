import { VStack } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import getUser from "@/modules/fetch";


const inter = Inter({ subsets: ["latin"] });

export default function Home({ user }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <VStack w="100vw">
          <>User Data: </>
          {user && user.map((item) => (
            <div key={item.id}>
              <h1>User Name: {item.name}</h1>
              <h1>User Email: {item.email}</h1>
            </div>
          ))}
        </VStack>
      </main>
    </>
  );
}

/// SERVER SIDE RENDERING
export async function getServerSideProps() {
  // Fetch data from external API
  const user = await getUser();

  return {
    props: {
      user,
    },
  };
}
