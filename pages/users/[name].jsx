import fetch from "isomorphic-unfetch";
import Profile from "../../components/Profile";
import css from "styled-jsx/css";
import Repository from "../../components/Repositories";

const style = css`
  .user-contents-wrapper {
    display: flex;
    padding: 20px;
  }
`;

const name = ({ user, repos }) => {
  if (!user) {
    return <h2>유저가 존재하지 않습니다. :(</h2>;
  }
  return (
    <div className="user-contents-wrapper">
      <Profile user={user} />
      <Repository user={user} repos={repos} />
      <style jsx>{style}</style>
    </div>
  );
};

export const getServerSideProps = async ({ query }) => {
  const { name, page } = query;
  try {
    let user;
    let repos;

    const userRes = await fetch(`https://api.github.com/users/${name}`);
    if (userRes.status === 200) {
      user = await userRes.json();
    }
    const repoRes = await fetch(
      `https://api.github.com/users/${name}/repos?sort=updated&page=${page}&per_page=10`
    );
    if (repoRes.status === 200) {
      repos = await repoRes.json();
    }
    return { props: { user, repos } };
  } catch (e) {
    console.log(e);
    return { props: {} };
  }
};

export default name;
