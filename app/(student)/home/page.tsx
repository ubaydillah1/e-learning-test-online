import CardPortal from "@/features/student/cardPortal";

const AppPage = () => {
  return (
    <div className="md:px-[40px] px-[20px] bg-background">
      <main className="max-w-[1050px] mx-auto pt-[20px] md:pb-[64px] pb-[40px]">
        <h1 className="text-[64px] text-center font-bold">
          Portal Latihan Soal
        </h1>
        <div className="text-[20px] text-slate-600 text-center mx-auto my-1">
          <p>Asah kemampuan akademikmu di sini!</p>
          <p>Pilih jenjang pendidikanmu dan mulailah belajar.</p>
        </div>

        <div className="flex gap-[32px] flex-wrap justify-center mt-[64px]">
          <CardPortal />
          <CardPortal />
          <CardPortal />
        </div>
      </main>
    </div>
  );
};

export default AppPage;
