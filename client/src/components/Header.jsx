import { Link } from 'react-router-dom';
import { SiArgo } from "react-icons/si";

export default function Header() {
    return (
        <header id="header" className='w-full static z-[10000] top-0 left-0 h-14 bg-white shadow-lg'>
            <div className="header__container flex justify-between items-center flex-row h-full px-8 lg:w-full xl:w-[1200px]">
                <div className="left flex gap-6 items-center justify-between px-8">
                    <h1><Link to='/' className='flex text-orange-600 text-lg'><SiArgo className='mr-1 text-2xl' />Miento</Link></h1>
                    <ul className='flex items-center'>
                        <li className='px-2 py-3 list-none justify-between flex items-center relative'>
                            <Link to='/'>블로그</Link>
                        </li>
                        <li className='px-[.6rem] py-3 list-none justify-between flex items-center relative'>
                            <Link to='/'>게시판</Link>
                        </li>
                        <li className='px-[.6rem] py-3 list-none justify-between flex items-center relative'>
                            <Link to='/'>공지사항</Link>
                        </li>
                    </ul>
                </div>
                <Link href="/signin" className='header__login font-medium rounded-lg text-black bg-white py-1 px-3 h-fit text-sm border border-black'>로그인</Link>
            </div>
        </header>
    )
}
