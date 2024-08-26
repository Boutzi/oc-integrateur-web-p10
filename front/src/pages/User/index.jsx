import { useSelector } from "react-redux";
import DocumentTitle from "../../components/DocumentTitle";
import Account from "../../components/Account/Account"
import UserHeader from "../../components/UserHeader/UserHeader"

export default function User() {
  const user = useSelector((state) => state.auth) || {};
  const title = `${user.firstName || "[Prénom]"} ${user.lastName || "[Nom]"}`;

  return (
    <>
      <DocumentTitle title={title} />
      <main className="main bg-dark">
        <UserHeader />
        <h2 className="sr-only">Accounts</h2>
        <Account title="Argent Bank Checking (x8349)" amount="2,082.79" description="Available Balance" />
        <Account title="Argent Bank Savings (x6712)" amount="10,928.42" description="Available Balance" />
        <Account title="Argent Bank Credit Card (x8349)" amount="184.30" description="Current Balance" />
      </main>
    </>
  );
}
