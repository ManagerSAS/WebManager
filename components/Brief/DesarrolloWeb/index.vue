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
                                    <span class="text-seconds">del sitio web</span>
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
                                        <label class="titulos">¿Cual es tu actividad  principal?</label>
                                        <v-text-field
                                            v-model="FunctionSite"
                                            hide-details
                                            :rules="nameRules"
                                            color="teal darken-4"
                                            label="Escribe cuál es la funcion principal del sitio web*"
                                        ></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row class="text-quicksand">
                                    <v-col cols="12" md="6" lg="7">
                                        <label class="titulos" >¿De que tamaño es tu empresa?</label>
                                        <v-text-field
                                            v-model="tamEmpresa"
                                            :rules="nameRules"
                                            label="Escribe la cantidad de trabajadores que tienes*"
                                            hide-details
                                        ></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row class="text-quicksand">
                                    <v-col cols="12" md="6" lg="7">
                                        <label class="titulos" >¿Donde hacen presencia?</label>
                                        <v-text-field
                                            hide-details
                                            v-model="Presencia"
                                            :rules="nameRules"
                                            color="teal darken-4"
                                            label="Escribe lugares donde hace presencia tu marca*"
                                        ></v-text-field>
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
                                    <span class="text-seconds">del sitio web</span>
                                </div>
                            </div>
                        </v-col>
                        <v-col cols="12" md="1" lg="1">
                            <div class="linea-div">
                            </div>
                        </v-col>
                        <v-col cols="12" md="6" lg="6">
                            <div class="text-quicksand mt-lg-15 mb-lg-0 mt-xl-15 mb-xl-0">
                                <v-row >
                                    <v-col cols="12" md="6" lg="7" sm="6">
                                        <label class="titulos">Estado del sitio web</label>
                                        <v-radio-group v-model="EstatusSite" hide-details>
                                            <v-row >
                                                <v-col cols="12" md="12" lg="12">
                                                    <v-radio
                                                    label="Diseño desde 0"
                                                    value="Diseño desde 0"
                                                    hide-details
                                                    ></v-radio>
                                                </v-col>
                                                <v-col cols="12" md="12" lg="12">
                                                    <v-radio
                                                        label="Rediseno"
                                                        value="Rediseno"
                                                        hide-details
                                                    ></v-radio>
                                                </v-col>
                                                <v-col cols="12" md="12" lg="12">
                                                    <v-radio
                                                        label="Plantilla Web"
                                                        value="Plantilla Web"
                                                        hide-details
                                                    ></v-radio>
                                                </v-col>
                                            </v-row>   
                                        </v-radio-group> <br>
                                        <label class="titulos">¿A quién va dirigido?</label>
                                        <v-text-field
                                            v-model="Dirigido"
                                            hide-details
                                            :rules="nameRules"
                                            color="teal darken-4"
                                            label="Escribe a quién va dirigido el sitio*"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="6" lg="7" sm="6">
                                        <label class="titulos">Tipo de sitio web</label>
                                        <v-radio-group v-model="TypeSite" hide-details>
                                            <v-row >
                                                <v-col cols="12" md="12" lg="12">
                                                    <v-radio
                                                        label="Corporativo"
                                                        value="Corporativo"
                                                        hide-details
                                                    ></v-radio>
                                                </v-col>
                                                <v-col cols="12" md="12" lg="12">
                                                    <v-radio
                                                        label="Landig Page"
                                                        value="Landig Page"
                                                        hide-details
                                                    ></v-radio>
                                                </v-col>
                                                <v-col cols="12" md="12" lg="12">
                                                    <v-radio
                                                        label="Intranet o extranet"
                                                        value="Intranet o extranet"
                                                        hide-details
                                                    ></v-radio>
                                                </v-col>
                                                <v-col cols="12" md="12" lg="12">
                                                    <v-radio
                                                        label="E-commerce"
                                                        value="E-commerce"
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
                                    <span class="text-border-hable">IDEN</span>
                                    <span class="text-border-mos">TIDAD</span>
                                </div>
                                <div class="content-text-sitio-web">
                                    <span class="text-seconds">del sitio web</span>
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
                                    <v-col cols="12" md="6" lg="7">
                                        <label class="titulos">¿Cuentan con colores corporativos?</label>
                                        <v-radio-group v-model="Colores" hide-details>
                                            <v-row >
                                                <v-col cols="12" md="12" lg="12">
                                                    <v-radio
                                                    label="Si"
                                                    value="Si"
                                                    hide-details
                                                    ></v-radio>
                                                </v-col>
                                                <v-col cols="12" md="12" lg="12">
                                                    <v-radio
                                                        label="No"
                                                        value="No"
                                                        hide-details
                                                    ></v-radio>
                                                </v-col>
                                                <v-col v-if="Colores == 'Si'" cols="12" md="12" lg="12">
                                                    <v-text-field
                                                    v-model="ColorCual"
                                                    hide-details
                                                    :rules="nameRules"
                                                    color="teal darken-4"
                                                    label="Cuáles son los colores"
                                                ></v-text-field>
                                                </v-col>
                                            </v-row>   
                                        </v-radio-group> 
                                    </v-col>
                                </v-row>
                                <v-row class="text-quicksand">
                                    <v-col cols="12" md="6" lg="7">
                                        <label class="titulos">Objetivo del sitio web</label>
                                        <v-radio-group v-model="ObjectiveSite" hide-details>
                                            <v-row >
                                                <v-col cols="12" md="12" lg="12">
                                                    <v-radio
                                                        label="Mejorar el diseño"
                                                        value="Mejorar el diseño"
                                                        hide-details
                                                    ></v-radio>
                                                </v-col>
                                                <v-col cols="12" md="12" lg="12">
                                                    <v-radio
                                                        label="Optimización SEO"
                                                        value="Optimización SEO"
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
                                                        label="Intranet o extranet"
                                                        value="Intranet o extranet"
                                                        hide-details
                                                    ></v-radio>
                                                </v-col>
                                                <v-col cols="12" md="12" lg="12">
                                                    <v-radio
                                                        label="Todas las anteriores"
                                                        value="Todas las anteriores"
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
                                                <v-col v-if="ObjectiveSite == 'Otra'" cols="12" md="12" lg="12">
                                                    <v-text-field
                                                        v-model="OpcionObjetivo"
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
                                    <span class="text-border-hable">SITUA</span>
                                    <span class="text-border-mos">CIÓN</span>
                                </div>
                                <div class="content-text-sitio-web">
                                    <span class="text-seconds">actual del sitio</span>
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
                                        <label class="titulos">¿Hace cuánto se diseñó el sitio?</label>
                                        <v-textarea
                                            v-model="TimeSite"
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
                                        <label class="titulos">Puntos a favor</label>
                                        <v-textarea
                                            v-model="PuntoFavor"
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
                                        <label class="titulos">Puntos en contra</label>
                                        <v-textarea
                                            v-model="PuntoContra"
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
                    <v-row>
                        <v-col cols="12" md="5" lg="5">
                            <div class="content-text">
                                <div class="content-text-border">
                                    <span class="text-border-hable">ESTRUC</span>
                                    <span class="text-border-mos">TURA</span>
                                </div>
                                <div class="content-text-sitio-web">
                                    <span class="text-seconds">actual del sitio</span>
                                </div>
                            </div>
                        </v-col>
                        <v-col cols="12" md="1" lg="1">
                            <div class="linea-div">
                            </div>
                        </v-col>
                        <v-col cols="12" md="6" lg="6">
                            <div class="container-form-identidad2 pt-lg-15 mt-lg-15 mb-lg-15 mt-xl-0 mb-xl-0">
                                <v-row class="text-quicksand">
                                    <v-col cols="12" md="6" lg="7">
                                        <label class="titulos">¿Cómo es el mapa de navegación?</label>
                                        <v-text-field
                                            v-model="MapNav"
                                            hide-details
                                            color="teal darken-4"
                                            label="Escribe aquí cúal es el contenido que quieres que tenga el sitio/pagina web"
                                        ></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row class="text-quicksand">
                                    <v-col cols="12" md="6" lg="7">
                                        <label class="titulos">contenido para Footer</label>
                                        <v-text-field
                                            v-model="ContFooter"
                                            hide-details
                                            color="teal darken-4"
                                            label="Escribe aquí cúal es el contenido que quieres mostrar en el Footer/pie de pagina"
                                        ></v-text-field>
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
                    <v-row class="mb-5">
                        <v-col cols="12" md="5" lg="5">
                            <div class="content-text">
                                <div class="content-text-border-aspectos">
                                    <span class="text-border-aspectos">ASPECTOS</span>
                                </div>
                                <div class="content-text-tecni">
                                    <span class="text-seconds-tecni">técnicos</span>
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
                                        <label class="titulos">¿Donde está alojada la web?</label>
                                        <v-text-field
                                            v-model="Alojamiento"
                                            hide-details
                                            color="teal darken-4"
                                            label="Donde esta alojada"
                                        ></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row class="text-quicksand">
                                    <v-col cols="12" md="6" lg="7">
                                        <label class="titulos">¿Cuentan con Backup?</label>
                                        <v-radio-group v-model="BackupsAlojam" >
                                            <v-row >
                                                <v-col cols="12" md="3" lg="3">
                                                    <v-radio
                                                        label="Si"
                                                        value="Si"
                                                        hide-details
                                                    ></v-radio>
                                                </v-col>
                                                <v-col cols="12" md="3" lg="3">
                                                    <v-radio
                                                        label="No"
                                                        value="No"
                                                        hide-details
                                                    ></v-radio>
                                                </v-col>
                                            </v-row>   
                                        </v-radio-group> 
                                    </v-col>
                                </v-row>
                                <v-row class="text-quicksand">
                                    <v-col cols="12" md="6" lg="7">
                                        <label class="titulos">¿Cuentan con CDN?</label>
                                        <v-radio-group v-model="Cdn" >
                                            <v-row >
                                                <v-col cols="12" md="3" lg="3">
                                                <v-radio
                                                    label="Si"
                                                    value="Si"
                                                    hide-details
                                                ></v-radio>
                                                </v-col>
                                                <v-col cols="12" md="3" lg="3">
                                                    <v-radio
                                                    label="No"
                                                    value="No"
                                                    hide-details
                                                ></v-radio>
                                                </v-col>
                                                <v-col v-if="Cdn == 'Si'" cols="12" md="6" lg="6">
                                                    <v-text-field
                                                        v-model="CdnCual"
                                                        hide-details
                                                        color="teal darken-4"
                                                        label="Cuál:"
                                                    ></v-text-field>
                                                </v-col>
                                            </v-row>   
                                        </v-radio-group> 
                                    </v-col>
                                </v-row>
                                <v-row class="text-quicksand">
                                    <v-col cols="12" md="6" lg="7">
                                        <label class="titulos">¿Cuentan con SSL?</label>
                                        <v-radio-group v-model="Ssl" >
                                            <v-row >
                                                <v-col cols="12" md="3" lg="3">
                                                <v-radio
                                                    label="Si"
                                                    value="Si"
                                                    hide-details
                                                ></v-radio>
                                                </v-col>
                                                <v-col cols="12" md="3" lg="3">
                                                    <v-radio
                                                    label="No"
                                                    value="No"
                                                    hide-details
                                                ></v-radio>
                                                </v-col>
                                                <v-col v-if="Ssl == 'Si'" cols="12" md="6" lg="6">
                                                    <v-text-field
                                                        v-model="SslCual"
                                                        hide-details
                                                        color="teal darken-4"
                                                        label="Cuál:"
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
                    <v-row>
                        <v-col cols="12" md="5" lg="5" sm="12">
                            <div class="content-text">
                                <div class="content-text-border">
                                    <span class="text-border-hable">HABLE</span>
                                    <span class="text-border-mos">MOS</span>
                                </div>
                                <div class="content-text-sitio-web">
                                    <span class="text-seconds">del sitio web</span>
                                </div>
                            </div>
                        </v-col>
                        <v-col cols="12" md="1" lg="1">
                            <div class="linea-div">
                            </div>
                        </v-col>
                        <v-col cols="12" md="6" lg="6" sm="12">
                            <div class="container-form-hablemos3 mt-lg-15 mb-lg-15 mt-xl-0 mb-xl-0">
                                <v-row class="text-quicksand">
                                    <v-col cols="12" md="6" lg="7">
                                        <label class="titulos">Tu presupuesto es de</label>
                                        <v-text-field
                                            v-model="Presupuesto"
                                            hide-details
                                            type="number"
                                            color="teal darken-4"
                                            label="Cuánto es tu presupuesto para el proyecto"
                                        ></v-text-field>
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
                                            @click="e1 = 9"
                                        >
                                            Siguiente <v-icon>mdi-arrow-right-drop-circle-outline</v-icon>
                                        </v-btn>
                                    </v-col>
                                </v-row>
                            </div>
                        </v-col>
                    </v-row>
                </v-stepper-content>  
                <v-stepper-content step="9">
                    <v-row>
                        <v-col cols="12" md="5" lg="5" sm="12">
                            <div class="content-text">
                                <div class="content-text-border content-text-border-adicional">
                                    <span class="text-border-hable">ADICI</span>
                                    <span class="text-border-mos">ONALES</span>
                                </div>
                                <div class="content-text-sitio-web">
                                    <span class="text-seconds">del sitio web</span>
                                </div>
                            </div>
                        </v-col>
                        <v-col cols="12" md="1" lg="1">
                            <div class="linea-div">
                            </div>
                        </v-col>
                        <v-col cols="12" md="6" lg="6" sm="12">
                            <div class="mt-lg-15 pt-lg-10 mt-xl-15 mb-xl-0">
                                <v-row class="text-quicksand">
                                    <v-col cols="12" md="6" lg="6">
                                            <label class="titulos">Mantenimiento</label>
                                            <v-radio-group v-model="Mantenimiento" hide-details>
                                                <v-row >
                                                    <v-col cols="12" md="6" lg="6" sm="6">
                                                        <v-radio
                                                            label="interno"
                                                            value="interno"
                                                            hide-details
                                                        ></v-radio>
                                                    </v-col>
                                                    <v-col cols="12" md="6" lg="6" sm="6">
                                                        <v-radio
                                                            label="Agencia"
                                                            value="Agencia"
                                                            hide-details
                                                        ></v-radio>
                                                    </v-col>
                                                </v-row>   
                                            </v-radio-group> 
                                            <v-radio-group v-model="Seguridad" hide-details>
                                                <v-row >
                                                    <v-col cols="12" md="6" lg="6" sm="6" >
                                                        <v-radio
                                                            label="CRM"
                                                            value="CRM"
                                                            hide-details
                                                        ></v-radio>
                                                    </v-col>
                                                    <v-col cols="12" md="6" lg="6" sm="6">
                                                        <v-radio
                                                            label="Sistema de chat"
                                                            value="Sistema de chat"
                                                            hide-details
                                                        ></v-radio>
                                                    </v-col>
                                                    <v-col cols="12" md="6" lg="6" sm="6">
                                                        <v-radio
                                                            label="Foro"
                                                            value="Foro"
                                                            hide-details
                                                        ></v-radio>
                                                    </v-col>
                                                    <v-col cols="12" md="6" lg="6" sm="6">
                                                        <v-radio
                                                            label="Reservas"
                                                            value="Reservas"
                                                            hide-details
                                                        ></v-radio>
                                                    </v-col>
                                                    <v-col cols="12" md="6" lg="6" sm="6">
                                                        <v-radio
                                                            label="Google Maps"
                                                            value="Google Maps"
                                                            hide-details
                                                        ></v-radio>
                                                    </v-col>
                                                    <v-col cols="12" md="6" lg="6" sm="6">
                                                        <v-radio
                                                            label="Calendario"
                                                            value="Calendario"
                                                            hide-details
                                                        ></v-radio>
                                                    </v-col>
                                                    <v-col cols="12" md="8" lg="8" sm="8">
                                                        <v-radio
                                                            label="Sección privada para Cliente/Proveedor"
                                                            value="Sección privada para Cliente/Proveedor"
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
                                            @click="e1 = 8"
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
                e1: 1,
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
                // Hablos del sitio
                NameMarca:'',
                FunctionSite:'',
                tamEmpresa:'',
                Presencia:'',
                //----estado sitio
                EstatusSite:false,
                Dirigido:'',
                TypeSite:false,
                //--- Identidad
                Colores:false,
                ColorCual:'',
                ObjectiveSite: false,
                OpcionObjetivo:'',
                // Situacion actual
                TimeSite:'',
                PuntoFavor:'',
                PuntoContra:'',
                // estructura
                MapNav:'',
                ContFooter:'',
                //Aspectos tecnicos
                Alojamiento:'',
                BackupsAlojam:false,
                Cdn:false,
                CdnCual:'',
                Ssl:false,
                SslCual:'',
                // -------
                Presupuesto:'',
                // -----
                Mantenimiento:false,
                Seguridad: false,
            }
            
        },
        methods:{
            async enviarBrief(){
                this.loading = true
                this.snackbar = true
                this.colorSnack = 'green accent-4'
                this.message = 'Se esta procesando su informacion por favor espere...'
                if(this.nombre !== '' && this.NumeroCel !== '' && this.Email !== '' && this.NameMarca !== '' && this.FunctionSite !== '' && this.tamEmpresa !== '' && this.Presencia !== '' && this.MapNav!== '' &&this.ContFooter !== ''){
                    
                    const data = {
                        nombre: this.nombre,
                        NumeroCel: this. NumeroCel,
                        Email: this.Email,
                        // Hablos del sitio
                        NameMarca: this.NameMarca,
                        FunctionSite: this.FunctionSite,
                        tamEmpresa: this.tamEmpresa,
                        Presencia: this.Presencia,
                        //----estado sitio
                        EstatusSite: this.EstatusSite,
                        Dirigido: this.Dirigido,
                        TypeSite: this.TypeSite,
                        //--- Identidad
                        Colores: this.Colores,
                        ColorCual: this.ColorCual,
                        ObjectiveSite: this.ObjectiveSite,
                        OpcionObjetivo: this.OpcionObjetivo,
                        // Situacion actual
                        TimeSite: this.TimeSite,
                        PuntoFavor: this.PuntoFavor,
                        PuntoContra: this.PuntoContra,
                        // estructura
                        MapNav: this.MapNav,
                        ContFooter: this.ContFooter,
                        //Aspectos tecnicos
                        Alojamiento: this.Alojamiento,
                        BackupsAlojam: this.BackupsAlojam,
                        Cdn: this.Cdn,
                        CdnCual: this.CdnCual,
                        Ssl: this.Ssl,
                        SslCual: this.SslCual,
                        // -------
                        Presupuesto: this.Presupuesto,
                        // -----
                        Mantenimiento: this.Mantenimiento,
                        Seguridad: this.Seguridad,   
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
            }
        }
    }
</script>