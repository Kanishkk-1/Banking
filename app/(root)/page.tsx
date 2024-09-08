import React from "react";
import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import RightSideBar from "@/components/RightSidebar";
import { getLoggedInUser } from "@/lib/actions/user.actions";

const Home = async () => {
  const loggedIn = await getLoggedInUser();

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.name || "guest"}
            subtext="Access and manage your account and transactions efficiently. "
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={12384.77}
          />
        </header>
        RECENT TRANSACTIONS
      </div>
      <RightSideBar
      user={loggedIn}
      transactions={[]}
      banks={[{currentBalance:1289} , {currentBalance:8292      }]}
      />
    </section>
  );
};

export default Home;
