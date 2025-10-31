

export default function Hero() {
  return (
    <section className="px-4 py-5" id="home">
      <div className="@container">
        <div className="p-0 md:p-4">
          <div
            className="flex min-h-[60vh] md:min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-none md:rounded-xl items-center justify-center p-4"
            style={{
              backgroundImage:
                'linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDMQuSef_b8_7ntIF1dlYj88cfgJVXWzC83qbttWaEjMDW10mN6xHKfhXBX3sxUewvRpg1K4IgoobjvBhJZEvMV6aMYwTbmQdtnBsDmxOmWTV5rXBSSFsIkcyUMBKBIvNOyYAJXhaOByLGUDivQ1MV446s8FEaRcK8mHYZpJhxUqYno0_PZbblmFRYB2ykCZQzsIvx1bZBtEpLxu7RqOL8T9abWLgKORcmgNpacr5T2CauojzEA6Ak9HiI32kk0HTxXCEe6O7kwoPo")',
            }}
          >
            <div className="flex flex-col gap-4 text-center max-w-2xl">
              <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-6xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                Stunning Website Designs That Convert.
              </h1>
              <h2 className="text-white/90 text-base font-normal leading-normal @[480px]:text-lg @[480px]:font-normal @[480px]:leading-normal">
                We create beautiful, user-friendly websites that drive results.
              </h2>
            </div>
            <button   className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-black text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors"
>
              <span className="truncate">Get a Free Quote</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
