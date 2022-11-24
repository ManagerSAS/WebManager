<template>
    <div class="ImgEquipo">
        <v-stepper v-model="e1" class="pb-md-5" style="background-color: transparent;border: transparent; height: 100%; width: 100%;">
            <v-stepper-items class="pb-md-5">
                <v-stepper-content step="1" >
                    <v-row >
                        <v-col cols="12" md="5" lg="5" sm="12">
                            <div class="content-text">
                                <div class="content-text-border">
                                    <span class="text-border">¡EY!</span><br>
                                </div>
                                <div class="content-text-seconds">
                                    <span class="text-seconds">¿qué tal?</span>
                                </div>
                            </div>
                        </v-col>
                        <v-col justify="center" align="center" cols="12" md="1" lg="1" sm="12">
                            <div class="linea-div">
                            </div>
                        </v-col>
                        <v-col cols="12" md="6" lg="6" sm="12">
                            <div class="container-form mt-lg-15 mb-lg-15 mt-xl-0 mb-xl-0">
                                <v-row class="text-quicksand">
                                    <v-col cols="12" md="6" lg="7">
                                        <label class="titulos" >¡Hola!</label>
                                        <v-text-field
                                            v-model="nombre"
                                            :rules="nameRules"
                                            color="teal darken-4"
                                            label="Escribe tu nombre aquí*"
                                        ></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row class="text-quicksand">
                                    <v-col cols="12" md="6" lg="7">
                                        <label class="titulos" >¡Hablemos!</label>
                                        <v-text-field
                                            v-model="NumeroCel"
                                            :rules="nameRules"
                                            type="number"
                                            color="teal darken-4"
                                            label="Escribe tu número de contacto*"
                                        ></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row class="text-quicksand">
                                    <v-col cols="12" md="6" lg="7">
                                        <label class="titulos" >¡Te contactaremos por correo!</label>
                                        <v-text-field
                                            v-model="Email"
                                            :rules="emailRules"
                                            color="teal darken-4"
                                            label="Escribe tu electrónico*"
                                        ></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col class="text-quicksand" justify="center" align="end" cols="7">
                                        <v-btn
                                            color="#29ABE2"
                                            style="color: white"
                                            @click="e1 = 2"
                                        >
                                            Avanzar <v-icon>mdi-arrow-right-drop-circle-outline</v-icon>
                                        </v-btn>
                                    </v-col>
                                </v-row>
                            </div>
                        </v-col>
                    </v-row>
                </v-stepper-content> 
                <v-stepper-content step="2">
                    <v-row>
                        <v-col cols="12" md="5" lg="5" sm="12">
                            <div class="content-text">
                                <div class="content-text-border">
                                    <span class="text-border-hable">HABLE</span>
                                    <span class="text-border-mos">MOS</span>
                                </div>
                                <div class="content-text-sitio-web">
                                    <span class="text-seconds">de la marca</span>
                                </div>
                            </div>
                        </v-col>
                        <v-col cols="12" md="1" lg="1">
                            <div class="linea-div">
                            </div>
                        </v-col>
                        <v-col cols="12" md="6" lg="6">
                            <div class="container-form-hablemos mt-lg-15 mb-lg-15 mt-xl-0 mb-xl-0">
                                <v-row class="text-quicksand">
                                    <v-col cols="12" md="6" lg="7" sm="12">
                                        <label class="titulos" >Nombre de tu marca</label>
                                        <v-text-field
                                            v-model="NameMarca"
                                            :rules="nameRules"
                                            hide-details
                                            color="teal darken-4"
                                            label="Escribe el nombre de tu marca*"
                                        ></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row class="text-quicksand">
                                    <v-col cols="12" md="6" lg="7">
                                        <label class="titulos">¿Posee un diseño de Logo/Marca?</label>
                                        <v-radio-group v-model="poseeLogo" hide-details>
                                            <v-row >
                                                <v-col cols="12" md="12" lg="12">
                                                    <v-radio
                                                    label="Quiero diseñar mi marca desde 0"
                                                    value="Quiero diseñar mi marca desde 0"
                                                    hide-details
                                                    ></v-radio>
                                                </v-col>
                                                <v-col cols="12" md="12" lg="12">
                                                    <v-radio
                                                        label="Quiero Rediseñar mi marca actual (Adjuntar logo)"
                                                        value="Quiero Rediseñar mi marca actual (Adjuntar logo)"
                                                        hide-details
                                                    ></v-radio>
                                                </v-col>
                                                <v-col cols="12" md="12" lg="12">
                                                    <v-radio
                                                        label="Tengo una idea para trabajar sobre ella (Adjuntar boceto)"
                                                        value="Tengo una idea para trabajar sobre ella (Adjuntar boceto)"
                                                        hide-details
                                                    ></v-radio>
                                                </v-col>
                                            </v-row>   
                                        </v-radio-group> 
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col class="text-quicksand" justify="center" align="center" cols="3">
                                            <v-btn
                                                color="#29ABE2"
                                                style="color: white"
                                                @click="e1 = 1"
                                            >
                                            <v-icon>mdi-arrow-left-drop-circle-outline</v-icon>Anterior 
                                            </v-btn>
                                        </v-col>
                                        <v-col class="text-quicksand" justify="center" align="center" cols="3">
                                            <v-btn
                                                color="#29ABE2"
                                                style="color: white"
                                                @click="e1 = 3"
                                            >
                                                Siguiente <v-icon>mdi-arrow-right-drop-circle-outline</v-icon>
                                            </v-btn>
                                        </v-col>
                                </v-row>
                            </div>
                        </v-col>
                    </v-row>
                </v-stepper-content> 
                <v-stepper-content step="3">
                    <v-row class="mb-5">
                        <v-col cols="12" md="5" lg="5">
                            <div class="content-text">
                                <div class="content-text-border">
                                    <span class="text-border-hable">HABLE</span>
                                    <span class="text-border-mos">MOS</span>
                                </div>
                                <div class="content-text-sitio-web">
                                    <span class="text-seconds">de la marca</span>
                                </div>
                            </div>
                        </v-col>
                        <v-col cols="12" md="1" lg="1">
                            <div class="linea-div">
                            </div>
                        </v-col>
                        <v-col cols="12" md="6" lg="6">
                            <div class="text-quicksand mt-lg-15 pt-lg-15 mt-xl-15 mb-xl-0">
                                <v-row  class="mt-lg-15">
                                    <v-col cols="12" md="6" lg="7" sm="6">
                                        <label class="titulos">Adjuntar Archivo</label>
                                        <v-file-input
                                            v-model="files"
                                            show-size
                                            counter
                                            chips
                                            multiple
                                            @change="ViewFile"
                                            label="File input"
                                        ></v-file-input>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col class="text-quicksand" justify="center" align="center" cols="3">
                                            <v-btn
                                                color="#29ABE2"
                                                style="color: white"
                                                @click="e1 = 2"
                                            >
                                            <v-icon>mdi-arrow-left-drop-circle-outline</v-icon>Anterior 
                                            </v-btn>
                                        </v-col>
                                        <v-col class="text-quicksand" justify="center" align="center" cols="3">
                                            <v-btn
                                                color="#29ABE2"
                                                style="color: white"
                                                @click="e1 = 4"
                                            >
                                                Siguiente <v-icon>mdi-arrow-right-drop-circle-outline</v-icon>
                                            </v-btn>
                                        </v-col>
                                </v-row>
                            </div>
                        </v-col>
                    </v-row>
                </v-stepper-content> 
                <v-stepper-content step="4">
                    <v-row class="mb-5"> 
                        <v-col cols="12" md="5" lg="5">
                            <div class="content-text">
                                <div class="content-text-border">
                                    <span class="text-border-hable">HABLE</span>
                                    <span class="text-border-mos">MOS</span>
                                </div>
                                <div class="content-text-sitio-web">
                                    <span class="text-seconds">de la marca</span>
                                </div>
                            </div>
                        </v-col>
                        <v-col cols="12" md="1" lg="1">
                            <div class="linea-div">
                            </div>
                        </v-col>
                        <v-col cols="12" md="6" lg="6">
                            <div class="container-form-identidad mt-lg-15 mb-lg-0 mt-xl-15 mb-xl-0">
                                <v-row class="text-quicksand">
                                    <v-col cols="12" md="5" lg="5">
                                        <label class="titulos">¿Qué tipo de aplicaciones requiere?</label>
                                        <v-radio-group v-model="TypeDesign" hide-details>
                                            <v-row >
                                                <v-col cols="12" md="12" lg="12">
                                                    <v-radio
                                                        label="Tarjetas de presentación"
                                                        value="Tarjetas de presentación"
                                                        hide-details
                                                    ></v-radio>
                                                </v-col>
                                                <v-col cols="12" md="12" lg="12">
                                                    <v-radio
                                                        label="Membretes"
                                                        value="Membretes"
                                                        hide-details
                                                    ></v-radio>
                                                </v-col>
                                                <v-col cols="12" md="12" lg="12">
                                                    <v-radio
                                                        label="Mejorar ventas"
                                                        value="Mejorar ventas"
                                                        hide-details
                                                    ></v-radio>
                                                </v-col>
                                                <v-col cols="12" md="12" lg="12">
                                                    <v-radio
                                                        label="Bordados"
                                                        value="Bordados"
                                                        hide-details
                                                    ></v-radio>
                                                </v-col>
                                                <v-col cols="12" md="12" lg="12">
                                                    <v-radio
                                                        label="Redes Sociales"
                                                        value="Redes Sociales"
                                                        hide-details
                                                    ></v-radio>
                                                </v-col>
                                                <v-col cols="12" md="12" lg="12">
                                                    <v-radio
                                                        label="Otra"
                                                        value="Otra"
                                                        hide-details
                                                    ></v-radio>
                                                </v-col>
                                                <v-col v-if="TypeDesign == 'Otra'" cols="12" md="12" lg="12">
                                                    <v-text-field
                                                        v-model="OpcionType"
                                                        hide-details
                                                        color="teal darken-4"
                                                        label="Cuáles son los colores"
                                                    ></v-text-field>
                                                </v-col>
                                            </v-row>   
                                        </v-radio-group> 
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col class="text-quicksand" justify="center" align="center" cols="3">
                                        <v-btn
                                            color="#29ABE2"
                                            style="color: white"
                                            @click="e1 = 3"
                                        >
                                        <v-icon>mdi-arrow-left-drop-circle-outline</v-icon>Anterior 
                                        </v-btn>
                                    </v-col>
                                    <v-col class="text-quicksand" justify="center" align="center" cols="3">
                                        <v-btn
                                            color="#29ABE2"
                                            style="color: white"
                                            @click="e1 = 5"
                                        >
                                            Siguiente <v-icon>mdi-arrow-right-drop-circle-outline</v-icon>
                                        </v-btn>
                                    </v-col>
                                </v-row>
                            </div>
                        </v-col>
                    </v-row>
                </v-stepper-content> 
                <v-stepper-content step="5">
                    <v-row class="mb-5"> 
                        <v-col cols="12" md="5" lg="5">
                            <div class="content-text">
                                <div class="content-text-border">
                                    <span class="text-border-hable">IDEN</span>
                                    <span class="text-border-mos">TIDAD</span>
                                </div>
                                <div class="content-text-sitio-web">
                                    <span class="text-seconds">de la marca</span>
                                </div>
                            </div>
                        </v-col>
                        <v-col cols="12" md="1" lg="1">
                            <div class="linea-div">
                            </div>
                        </v-col>
                        <v-col cols="12" md="6" lg="6">
                            <div class="container-form-identidad mt-lg-15 mb-lg-0 mt-xl-15 mb-xl-0">
                                <label class="titulos ">¿Qué Gama Cromática (Colores) prefiere? (Maximo 2 colores)*</label>
                                <v-row class="text-quicksand mt-5">
                                    <v-col cols="12" md="5" lg="5">
                                        <v-color-picker
                                            dot-size="11"
                                            mode="hexa"
                                            hide-details
                                            v-model="FirstColor"
                                            elevation="15"
                                            swatches-max-height="149"
                                            ></v-color-picker>
                                    </v-col>
                                    <v-col cols="12" md="5" lg="5" v-if="OtroColor == true">
                                        <v-color-picker
                                            dot-size="11"
                                            hide-details
                                            mode="hexa"
                                            elevation="15"
                                            v-model="SecondColor"
                                            swatches-max-height="149"
                                        ></v-color-picker>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col>
                                        <v-checkbox
                                            hide-details
                                            v-model="OtroColor"
                                            @change="ViewFile"
                                            label="Agregar otro Color"
                                        ></v-checkbox>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col class="text-quicksand" justify="center" align="center" cols="3">
                                        <v-btn
                                            color="#29ABE2"
                                            style="color: white"
                                            @click="e1 = 4"
                                        >
                                        <v-icon>mdi-arrow-left-drop-circle-outline</v-icon>Anterior 
                                        </v-btn>
                                    </v-col>
                                    <v-col class="text-quicksand" justify="center" align="center" cols="3">
                                        <v-btn
                                            color="#29ABE2"
                                            style="color: white"
                                            @click="e1 = 6"
                                        >
                                            Siguiente <v-icon>mdi-arrow-right-drop-circle-outline</v-icon>
                                        </v-btn>
                                    </v-col>
                                </v-row>
                            </div>
                        </v-col>
                    </v-row>
                </v-stepper-content>
                <v-stepper-content step="6">
                    <v-row class="mb-5">
                        <v-col cols="12" md="5" lg="5">
                            <div class="content-text">
                                <div class="content-text-border">
                                    <span class="text-border-hable">HABLE</span>
                                    <span class="text-border-mos">MOS</span>
                                </div>
                                <div class="content-text-sitio-web">
                                    <span class="text-seconds">de la marca</span>
                                </div>
                            </div>
                        </v-col>
                        <v-col cols="12" md="1" lg="1">
                            <div class="linea-div">
                            </div>
                        </v-col>
                        <v-col cols="12" md="6" lg="6">
                            <div class="container-form-identidad2 mt-lg-15 mb-lg-0 mt-xl-0 mb-xl-0">
                                <v-row class="text-quicksand">
                                    <v-col cols="12" md="6" lg="7">
                                        <label class="titulos">¿Tiene algún elemento que quisiera incluir en el logo? Describir el elemento y explicar por qué</label>
                                        <v-textarea
                                            v-model="TypeElement"
                                            hide-details
                                            outlined
                                            type="text"
                                            rows="3"
                                            color="teal darken-4"
                                        ></v-textarea>
                                    </v-col>
                                </v-row>
                                <v-row class="text-quicksand">
                                    <v-col cols="12" md="6" lg="7">
                                        <label class="titulos">¿Qué expectativas tienes sobre el logo?</label>
                                        <v-textarea
                                            v-model="Expectation"
                                            hide-details
                                            outlined
                                            type="text"
                                            rows="3"
                                            color="teal darken-4"
                                        ></v-textarea>
                                    </v-col>
                                </v-row>
                                <v-row class="text-quicksand">
                                    <v-col cols="12" md="6" lg="7">
                                        <label class="titulos">¿Tiene alguna marca como referente (ya sea dentro o fuera de su campo)? Nombrarlas y escribir qué es lo que gusta (si desea incluir links lo puede hacer)</label>
                                        <v-textarea
                                            v-model="References"
                                            hide-details
                                            outlined
                                            type="text"
                                            rows="3"
                                            color="teal darken-4"
                                        ></v-textarea>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col class="text-quicksand" justify="center" align="center" cols="3">
                                        <v-btn
                                            color="#29ABE2"
                                            style="color: white"
                                            @click="e1 = 5"
                                        >
                                        <v-icon>mdi-arrow-left-drop-circle-outline</v-icon>Anterior 
                                        </v-btn>
                                    </v-col>
                                    <v-col class="text-quicksand" justify="center" align="center" cols="3">
                                        <v-btn
                                            color="#29ABE2"
                                            style="color: white"
                                            @click="e1 = 7"
                                        >
                                            Siguiente <v-icon>mdi-arrow-right-drop-circle-outline</v-icon>
                                        </v-btn>
                                    </v-col>
                                </v-row>
                            </div>
                        </v-col>
                    </v-row>
                </v-stepper-content>
                <v-stepper-content step="7">
                    <v-row>
                        <v-col cols="12" md="5" lg="5">
                            <div class="content-text">
                                <div class="content-text-border">
                                    <span class="text-border-aspectos">PUBLICO</span>
                                </div>
                                <div class="content-text-tecni">
                                    <span class="text-seconds-tecni">Objetivo</span>
                                </div>
                            </div>
                        </v-col>
                        <v-col cols="12" md="1" lg="1">
                            <div class="linea-div">
                            </div>
                        </v-col>
                        <v-col cols="12" md="6" lg="6">
                            <div class="container-form-identidad2 ">
                                <v-row class="text-quicksand">
                                    <v-col cols="12" md="6" lg="7">
                                        <label class="titulos">¿Cuál es su público objetivo? (Si quiere explorar un nuevo mercado, realizar una breve descripción)</label>
                                        <v-textarea
                                            v-model="ObjetivePublic"
                                            hide-details
                                            outlined
                                            type="text"
                                            rows="3"
                                            label="Escribe aquí cúal es el contenido que quieres que tenga el sitio/pagina web"
                                        ></v-textarea>
                                    </v-col>
                                </v-row>
                                <v-row class="text-quicksand">
                                    <v-col cols="12" md="6" lg="7">
                                        <label class="titulos">¿En este momento cómo realiza su publicidad?</label>
                                        <v-textarea
                                            v-model="Advertising"
                                            hide-details
                                            outlined
                                            type="text"
                                            rows="3"
                                            label="Escribe aquí cúal es el contenido que quieres mostrar en el Footer/pie de pagina"
                                        ></v-textarea>
                                    </v-col>
                                </v-row>
                                <v-row class="text-quicksand">
                                    <v-col cols="12" md="6" lg="7">
                                        <label class="titulos">¿Cómo describe a su marca? ¿Qué adjetivos definen a su marca?</label>
                                        <v-textarea
                                            v-model="Description"
                                            hide-details
                                            outlined
                                            type="text"
                                            rows="3"
                                            label="Escribe aquí cúal es el contenido que quieres mostrar en el Footer/pie de pagina"
                                        ></v-textarea>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col class="text-quicksand" justify="center" align="center" cols="3">
                                        <v-btn
                                            color="#29ABE2"
                                            style="color: white"
                                            @click="e1 = 6"
                                        >
                                        <v-icon>mdi-arrow-left-drop-circle-outline</v-icon>Anterior 
                                        </v-btn>
                                    </v-col>
                                    <v-col class="text-quicksand" justify="center" align="center" cols="3">
                                        <v-btn
                                            color="#29ABE2"
                                            style="color: white"
                                            @click="e1 = 8"
                                        >
                                            Siguiente <v-icon>mdi-arrow-right-drop-circle-outline</v-icon>
                                        </v-btn>
                                    </v-col>
                                </v-row>
                            </div>
                        </v-col>
                    </v-row>
                </v-stepper-content> 
                <v-stepper-content step="8">
                    <v-row class="mb-5">
                        <v-col cols="12" md="5" lg="5">
                            <div class="content-text">
                                <div class="content-text-border">
                                    <span class="text-border-hable">ADICIO</span>
                                    <span class="text-border-mos">NALES</span>
                                </div>
                            </div>
                        </v-col>
                        <v-col cols="12" md="1" lg="1">
                            <div class="linea-div">
                            </div>
                        </v-col>
                        <v-col cols="12" md="6" lg="6">
                            <div class="container-form-identidad2 mt-lg-15 mb-lg-0 mt-xl-0 mb-xl-0">
                                <v-row class="text-quicksand">
                                    <v-col cols="12" md="6" lg="7">
                                        <label class="titulos">¿Cuál es su propuesta de valor, qué hace que se diferencie de su competencia?</label>
                                        <v-textarea
                                            v-model="Values"
                                            hide-details
                                            outlined
                                            type="text"
                                            rows="3"
                                            label="Donde esta alojada"
                                        ></v-textarea>
                                    </v-col>
                                </v-row>
                                <v-row class="text-quicksand">
                                    <v-col cols="12" md="6" lg="7">
                                        <label class="titulos">¿Cuenta con Redes Sociales? enviar links</label>
                                        <v-textarea
                                            v-model="Social"
                                            hide-details
                                            outlined
                                            type="text"
                                            rows="3"
                                            label="Donde esta alojada"
                                        ></v-textarea>
                                    </v-col>
                                </v-row>
                                <v-row class="text-quicksand">
                                    <v-col cols="12" md="6" lg="7">
                                        <label class="titulos">Observaciones adicionales respecto a la creación de marca</label>
                                        <v-textarea
                                            v-model="Observations"
                                            hide-details
                                            outlined
                                            type="text"
                                            rows="3"
                                            label="Donde esta alojada"
                                        ></v-textarea>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col class="text-quicksand" justify="center" align="center" cols="3">
                                        <v-btn
                                            color="#29ABE2"
                                            style="color: white"
                                            @click="e1 = 7"
                                        >
                                        <v-icon>mdi-arrow-left-drop-circle-outline</v-icon>Anterior 
                                        </v-btn>
                                    </v-col>
                                    <v-col class="text-quicksand" justify="center" align="center" cols="3">
                                        <v-btn
                                            color="#29ABE2"
                                            style="color: white"
                                            @click="enviarBrief"
                                        >
                                            Enviar Brief <v-icon>mdi-arrow-right-drop-circle-outline</v-icon>
                                        </v-btn>
                                    </v-col>
                                </v-row>
                            </div>
                        </v-col>
                    </v-row>
                </v-stepper-content> 
            </v-stepper-items>
            <v-row justify="center" align="center">
                <v-col justify="center" align="center" cols="12" sm="12" md="12" lg="12">
                    <v-snackbar
                        :timeout="3000"
                        :value="snackbar"
                        :color="colorSnack"
                        shaped
                        elevation="24"
                    > {{ message }} </v-snackbar>
                </v-col>
            </v-row>
            <v-row justify="center" align="center">
                <v-col justify="center" align="center" cols="12" sm="12" md="12" lg="12">
                    <v-progress-circular
                        v-show="loading"
                        indeterminate
                        color="teal darken-3"
                    ></v-progress-circular>
                </v-col>
            </v-row>
        </v-stepper>
    </div>
</template>

<script>
import post from '../../Pots/post'
    export default {
        data(){
            return{
                e1: 3,
                nameRules: [
                v => !!v || 'Campo requerido',
                ],
                emailRules: [
                    v => /.+@.+\..+/.test(v) || '',
                ],
                snackbar: false,
                message:'',
                colorSnack:'',
                loading: false,
                // ey que tal
                nombre:'',
                NumeroCel:'',
                Email:'',
                // Hablos de la amrca
                NameMarca:'',
                poseeLogo: '',
                // logos
                files: null,
                LinksLogos: [],
                Link:'',
                // tipo diseño
                TypeDesign:'',
                OpcionType:'',
                // colores
                FirstColor: null,
                SecondColor: null,
                OtroColor: false,
                // Adicionales
                TypeElement:'',
                Expectation:'',
                References:'',
                // objetivo
                ObjetivePublic:'',
                Advertising:'',
                Description:'',
                // values
                Values:'',
                Social:'',
                Observations:''
            }
            
        },
        methods:{
            async enviarBrief(){
                this.loading = true
                this.snackbar = true
                this.ColorSnack = 'green accent-4'
                this.message = 'Se esta procesando su informacion por favor espere...'
                if(this.nombre !== '' && this.NumeroCel !== '' && this.Email !== '' && this.NameMarca !== '' && this.poseeLogo !== '' && this.FirstColor !== '' && this.References !== '' && this.ObjetivePublic!== '' &&this.Description !== ''){
                    
                    const data = {
                        nombre:this.nombre,
                        NumeroCel:this.NumeroCel,
                        Email:this.Email,
                        // Hablos de la amrca
                        NameMarca:this.NameMarca,
                        poseeLogo: this.poseeLogo,
                        // logos
                        files:this.files,
                        // tipo diseño
                        TypeDesign:this.TypeDesign,
                        // colores
                        FirstColor:this.FirstColor,
                        SecondColor:this.SecondColor,
                        OtroColor:this.OtroColoralse,
                        // Adicionales
                        TypeElement:this.TypeElement,
                        Expectation:this.Expectation,
                        References:this.References,
                        // objetivo
                        ObjetivePublic:this.ObjetivePublic,
                        Advertising:this.Advertising,
                        Description:this.Description,
                        // values
                        Values:this.Values,
                        Social:this.Social,
                        Observations:this.Observations
                    }
                    // console.log(data)
                    const resonse = await post.SendBriefDesarrolloWeb(data)
                    // console.log(resonse)
                    if(resonse !== true){
                        this.loading = true
                        this.snackbar = true
                        this.colorSnack = 'green accent-4'
                        this.message = 'Su solicitud se envio con éxito'
                        setTimeout( function() { window.location.href = "https://agenciamanager.com"; }, 1000 );
                    }else{
                        this.loading = false
                        this.snackbar = true
                        this.colorSnack = 'red accent-4'
                        this.message = 'Intente nuevamente'
                    }
                }else{
                    this.botton = false
                    this.loading = false
                    this.snackbar = true
                    this.colorSnack = 'red accent-4'
                    this.message = 'Por favor llenar los campos obligatorios "*"'
                }
            },
            ViewFile(){
                this.files.forEach(element => {
                    const formdata = new FormData();
                    formdata.append("upload_preset", "LogoBrief");
                    formdata.append("file", element);
                    
                    const requestOptions = {
                        method: 'POST',
                        body: formdata,
                        redirect: 'follow'
                    };
                    fetch("https://api.cloudinary.com/v1_1/dhl17zanz/image/upload", requestOptions)
                    .then(response => response.json())
                    .then(result => this.Link = result.url)
                    .catch(error => console.log('error', error))
                });
                console.log(this.Link)

            }         
        }
    }
</script>