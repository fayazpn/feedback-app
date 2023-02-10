import { useAuth } from '@/lib/auth'

export default function Home() {
  const auth = useAuth()

  return (
    <>
      <main >
        <div >Feedback App</div>
        <div>
          <button onClick={() => auth.signinWithGithub()}>Sign in</button>
          <button onClick={() => auth.appSignOut()}>Sign Out</button>
          <span>{auth?.user?.email}</span>
        </div>
      </main>
    </>
  )
}
