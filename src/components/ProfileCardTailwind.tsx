function ProfileCardTailwind({ user }: { user: any }) {
  return (
    <div className="bg-[#111] border-2 border-red-400 p-8 rounded-xl text-center w-72 shadow-lg shadow-red-400">
      <img
        src={user.avatar_url}
        alt="profile picture"
        className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-red-400"
      />
      <p>{user.name}</p>
      <hr className="my-4 border-red-400" />
      <p>{user.bio}</p>
      <hr className="my-4 border-red-400" />
      <p>Repositórios públicos: {user.public_repos}</p>
      <a
        href={user.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 border border-red-400 text-red-400 px-4 py-2 rounded hover:bg-red-400 hover:text-black transition font-bold"
      >
        Ver Perfil
      </a>
    </div>
  );
}

export default ProfileCardTailwind;
