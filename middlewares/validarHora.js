

const validarHora = (req,res,next) => {
    const currentHour = req.dateType;
    const hour = parseInt(currentHour.split(':')[0]);
    if(hour >=12 && hour <= 23) {
        next()
    }else {
        const mensaje = `Aún no es la hora, espera hasta las 12:00 para entrar`;
        res.status(400). send(`<h1>${mensaje}</h1>`)

    }
}

module.exports = validarHora;