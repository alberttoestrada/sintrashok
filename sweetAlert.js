(async () => {
    const{value: pais }= await Swal.fire({
    title:"Bienvenido!",
    text:"De Donde Nos visitas",
    confirmButtonText: "Seleccionar",
    width: "40%",
    icon: "question",
    allowOutsideClick: false,
    confirmButtonColor:"#2fd20f",
    input: "select",
    inputPlaceholder:"Pais",
    imageUrl:"/sintrash/imgs/logo.jfif",
    imageWidth: "70px",
    inputValue:"",
    inputOptions:{
        AntiguayBarbuda: `Antigua y Barbuda`,
        Argentina: `Argentina`,
        Bahamas: `Bahamas`,
        Barbados: `Barbados`,
        Belice: `Belice`,
        Bolivia: `Bolivia`,
        Brasil: `Brasil`,
        Canadá: `Canadá`,
        Chile: `Chile`,
        Colombia: `Colombia`,
        CostaRica: `Costa Rica`,
        Cuba: `Cuba`,
        Dominica: `Dominica`,
        Ecuador: `Ecuador`,
        ElSalvador: `El Salvador`,
        EstadosUnidos: `Estados Unidos`,
        Granada: `Granada`,
        Guatemala: `Guatemala`,
        Guyana: `Guyana`,
        Haití: `Haití`,
        Honduras: `Honduras`,
        Jamaica: `Jamaica`,
        México: `México`,
        Nicaragua: `Nicaragua`,
        Panamá: `Panamá`,
        Paraguay: `Paraguay`,
        Perú: `Perú`,
        RepúblicaDominicana: `República Dominicana`,
        SanCristóbalyNieves: `San Cristóbal y Nieves`,
        SanVicenteylasGranadinas: `San Vicente y las Granadinas`,
        SantaLucía: `Santa Lucía`,
        Surinam: `Surinam`,
        TrinidadyTobago: `Trinidad y Tobago`,
        Uruguay: `Uruguay`,
        Venezuela: `Venezuela`,
    }    
}); if (pais){
    Swal.fire({
        title: "Seleccionaste " + pais,
        width: "25%",
        icon: "success",
        timer: 15000,
        confirmButtonColor:"#2fd20f",
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
    });
}
})()





