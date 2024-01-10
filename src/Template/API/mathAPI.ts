const fetchAPI = async () => {
  const link =
    "https://math.vercel.app?from=\frac{1}{Gamma(s)}int_{0}^{infty}\frac{u^{s-1}}{e^{u}-1}mathrm{d}u";
  try {
    fetch(link).then((res) => {
      if (!res.ok) {
        throw Error("could not fetch");
      }
      return res;
    });
  } catch {}
};
