import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <div className="px-8 md:px-24 py-6">
            <header className='flex justify-between items-center pb-2 border-b-2'>
                <h1 className="text-4xl font-bold">Knowledge Cafe</h1>
                <img src={profile} alt="" />
            </header>
        </div> 
    );
};

export default Header;