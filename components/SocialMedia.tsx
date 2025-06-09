import { FaYoutube, FaTiktok, FaGithub, FaLinkedin } from 'react-icons/fa';

const SocialMedia = () => {
  return (
     <div className="flex justify-center gap-6 text-2xl mt-4">
              <a
                href="https://www.youtube.com/@garcodes"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 hover:scale-110 transition"
                aria-label="GarCodes YouTube"
              >
                <FaYoutube />
              </a>
              <a
                href="https://www.tiktok.com/@garcodes"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black dark:text-white hover:scale-110 transition"
                aria-label="GarCodes TikTok"
              >
                <FaTiktok />
              </a>
    
                <a
                    href="https://github.com/garcodes"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 dark:text-gray-300 hover:scale-110 transition"
                    aria-label="GarCodes GitHub"
                >
                    <FaGithub />
                </a>
                <a
                    href="https://www.linkedin.com/in/garryledwith/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:scale-110 transition"
                    aria-label="GarCodes LinkedIn"
                >
                    <FaLinkedin />
                </a>
        </div>   
  )
}

export default SocialMedia