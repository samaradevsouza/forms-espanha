const formHtml = document.getElementById('formulario');

formHtml.addEventListener('submit', async (e) => {
    e.preventDefault();

    const { PDFDocument } = PDFLib;

    // Coleta os dados do formulário
    const dados = {
        nomeReq: document.getElementById('nomeReq').value,
        sobrenomeReq1: document.getElementById('sobrenomeReq1').value,
        sobrenomePai: document.getElementById('sobrenomePai').value,
        sobrenomeMae: document.getElementById('sobrenomeMae').value,
        nacionalidadeReq: document.getElementById('nacionalidadeReq').value,
        estadoCivilReq: document.getElementById('estadoCivilReq').value,
        numPassaporteReq: document.getElementById('numPassaporteReq').value,
        endReq: document.getElementById('endReq').value,
        estadoReq: document.getElementById('estadoReq').value,
        cepReq: document.getElementById('cepReq').value,
        paisReq: document.getElementById('paisReq').value,
        telReq: document.getElementById('telReq').value,
        emailReq: document.getElementById('emailReq').value,
        cidadeConsulado: document.getElementById('cidadeConsulado').value,
    };

    const dadosDDN = {
        sobrenomeReq1: document.getElementById('sobrenomeReq1').value,
        sobrenomeReq2: document.getElementById('sobrenomeReq2').value,
        hora: document.getElementById('hora').value,
        diaReq: document.getElementById('diaReq').value,
        anoReq: document.getElementById('anoReq').value,
        localidad: document.getElementById('localidad').value,
        paisNasc: document.getElementById('paisNasc').value,
        naturalDe: localidad + " " + paisNasc,
        diaRegistro: document.getElementById('diaRegistro').value,
        anoRegistro: document.getElementById('anoRegistro').value,
        localRegistro: document.getElementById('localRegistro').value,
        paisRegistro: document.getElementById('paisRegistro').value,
        livro: document.getElementById('livro').value,
        folha: document.getElementById('folha').value,
        termo: document.getElementById('termo').value,

        nomePai: document.getElementById('nomePai').value,
        sobrenomePai1: document.getElementById('sobrenomePai1').value,
        sobrenomePai2: document.getElementById('sobrenomePai2').value,
        paiPai: document.getElementById('paiPai').value,
        maePai: document.getElementById('maePai').value,
        localidadPai: document.getElementById('localidadPai').value,
        paisNascPai: document.getElementById('paisNascPai').value,
        diaNascPai: document.getElementById('diaNascPai').value,
        anoNascPai: document.getElementById('anoNascPai').value,
        estadoCivilPai1: document.getElementById('estadoCivilPai1').value,
        estadoCivilPai2: document.getElementById('estadoCivilPai2').value,
        nacionalidadePai1: document.getElementById('nacionalidadePai1').value,
        nacionalidadePai2: document.getElementById('nacionalidadePai2').value,
        domicilioPai: document.getElementById('domicilioPai').value,

        nomeMae: document.getElementById('nomeMae').value,
        sobrenomeMae1: document.getElementById('sobrenomeMae1').value,
        sobrenomeMae2: document.getElementById('sobrenomeMae2').value,
        maeMae: document.getElementById('maeMae').value,
        paiMae: document.getElementById('paiMae').value,
        localidadMae: document.getElementById('localidadMae').value,
        PaisNascMae: document.getElementById('PaisNascMae').value,
        diaNascMae: document.getElementById('diaNascMae').value,
        anoNascMae: document.getElementById('anoNascMae').value,
        EstadoCivilMae1: document.getElementById('EstadoCivilMae1').value,
        EstadoCivilMae2: document.getElementById('EstadoCivilMae2').value,
        nacionalidadeMae1: document.getElementById('nacionalidadeMae1').value,
        nacionalidadeMae2: document.getElementById('nacionalidadeMae2').value,
        domicilioMae: document.getElementById('domicilioMae').value,

        diaCelebracao: document.getElementById('diaCelebracao').value,
        anoCelebracao: document.getElementById('anoCelebracao').value,
        localCelebracao: document.getElementById('localCelebracao').value,
        localRegistroCas: document.getElementById('localRegistroCas').value,

        nomeCompletoReq: document.getElementById('nomeCompletoReq').value,
        calidad: document.getElementById('calidad').value,
        docId: document.getElementById('docId').value

    }

    // Lista de PDFs a serem preenchidos
    const arquivos = [
        {
            url: './forms-sp/anexo1.pdf',
            nome: 'AnexoI.pdf',
            campos: {
                'Textfield': dados.nomeReq,
                'Textfield-0': dados.sobrenomePai,
                'Textfield-1': dados.sobrenomeMae,
                'Textfield-2': dados.nacionalidadeReq,
                'Textfield-3': dados.estadoCivilReq,
                'Textfield-4': dados.numPassaporteReq,
                'Textfield-5': dados.paisReq,
                'Textfield-6': dados.emailReq,
                'Textfield-0a': dados.cidadeConsulado,
                'Textfielda-3': dados.endReq,
                'Textaafield-3': dados.estadoReq,
                'Textfddield-3': dados.telReq,
                'Texto1': dados.cidadeConsulado,
                'Taextfield-6': 'Española',
            }
        },
        {
            url: './forms-sp/anexo5.pdf',
            nome: 'AnexoV.pdf',
            campos: {
                'Textfield': dados.nomeReq + " " + dados.sobrenomeReq1,
                'Textfield-0': dados.nomeReq,
                'Textfield-1': dados.sobrenomePai,
                'Textfield-2': dados.nacionalidadeReq,
                'Textfield-3': dados.sobrenomeMae,
                'Textfield-4': dados.numPassaporteReq,
                'Textfield-5': dados.endReq,
                'Textfield-6': dados.estadoReq,
                'Textfield-7': dados.paisReq,
                'Textfield-8': dados.telReq,
                'Textfield-9': dados.emailReq,
                'En': dados.cidadeConsulado,
            }
        },
        {
            url: './forms-sp/ddn.pdf',
            nome: 'DeclaracionDatosNacimientos.pdf',
            campos: {
               'Nombre': dados.nomeReq,
               'Apellido 1': dadosDDN.sobrenomeReq1,
               'Apellido 2': dadosDDN.sobrenomeReq2,
               'Hora': dadosDDN.hora,
               'Dia': dadosDDN.diaReq,
               'Año': dadosDDN.anoReq,
               'Localidad': dadosDDN.localidad,
               'Pais': dadosDDN.paisNasc,
               'Dia_Incripcion': dadosDDN.diaRegistro,
               'Año Inscrito': dadosDDN.anoRegistro,
               'Localidad Rehistro': dadosDDN.localRegistro,
               'Pais Registro' : dadosDDN.paisRegistro,
               'Tomo' : dadosDDN.livro,
               'Página' : dadosDDN.folha,
               'Número' : dadosDDN.termo,

               'Nombre Padre': dadosDDN.nomePai,
               'Apellido 1 Padre' : dadosDDN.sobrenomePai1,
               'Apellido 2 Padre' : dadosDDN.sobrenomePai2,
               'Hijo de' : dadosDDN.paiPai,
               'Y de': dadosDDN.maePai,
               'Localidad Padre': dadosDDN.localidadPai,
               'Pais Padre' : dadosDDN.paisNascPai,
               'Dia Padre' : dadosDDN.diaNascPai,
               'del año' : dadosDDN.anoNascPai,
               'Estado civil del padre al nacerl' : dadosDDN.estadoCivilPai1,
               'Estado civil del padre en el momento actual' : dadosDDN.estadoCivilPai2,
               'Nac padre al nacer' : dadosDDN.nacionalidadePai1,
               'Nac padre ahora': dadosDDN.nacionalidadePai2,
               'nto del nacimiento del hijoa': dadosDDN.domicilioPai,

               'Nombre madre' : dadosDDN.nomeMae,
               'Apellido 1 madre' : dadosDDN.sobrenomeMae1,
               'Apellido 2 madre' : dadosDDN.sobrenomeMae2,
               'Hija de madre' : dadosDDN.maeMae,
               'Hija de padre' : dadosDDN.paiMae,
               'Nacida madre' : dadosDDN.localidadMae,
               'Pais madre' : dadosDDN.PaisNascMae,
               'Dia madre' : dadosDDN.diaNascMae,
               'del año_2 ' : dadosDDN.anoNascMae,
               'Estado civil de madre al nacerl' : dadosDDN.EstadoCivilMae1,
               'Estado civil de madre en el momento actual' : dadosDDN.EstadoCivilMae2,
               'Nac madre al nacer' : dadosDDN.nacionalidadeMae1,
               'nac madre act' : dadosDDN.nacionalidadeMae2,
               'Domicilio  de la madre en el momento del nacimiento del hijoa' : dadosDDN.domicilioMae,

               'Dia mat padres' : dadosDDN.diaCelebracao,
               'año' : dadosDDN.anoCelebracao,
               'undefined_4' : dadosDDN.localCelebracao,
               'Incrito RC' : dadosDDN.localRegistroCas,

               'DonDoña' : dadosDDN.nomeCompletoReq,
               'en calidad de' : dadosDDN.calidad,
               'Natural de' : dadosDDN.naturalDe,
               'día' : dadosDDN.diaReq,
               'año_2' : dadosDDN.anoReq,
               'cilio' : dados.endReq,
               'P.C' : dados.cepReq,
               'Telf móvil' : dados.telReq,
               'undefined_5' : dadosDDN.docId,
               'email' : dados.emailReq,
               'Texto13' : dados.cidadeConsulado
            }
        }
    ];

    for (const arquivo of arquivos) {
        try {
            const existingPdfBytes = await fetch(arquivo.url).then(res => res.arrayBuffer());
            const pdfDoc = await PDFDocument.load(existingPdfBytes);
            const form = pdfDoc.getForm();

            for (const [campo, valor] of Object.entries(arquivo.campos)) {
                try {
                    form.getTextField(campo).setText(valor);
                } catch (e) {
                    console.warn(`Campo "${campo}" não encontrado em ${arquivo.nome}`);
                }
            }

            const pdfBytes = await pdfDoc.save();
            const blob = new Blob([pdfBytes], { type: 'application/pdf' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = arquivo.nome;
            a.click();
        } catch (err) {
            console.error(`Erro ao gerar ${arquivo.nome}:`, err);
        }
    }
});