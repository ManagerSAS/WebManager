<template>
    <div class="ImgEquipo">
        <v-stepper v-model="e1" style="background-color: transparent;  ">
            <v-stepper-items>
                <v-stepper-content step="1">
                    <div>
                        <v-row>
                            <v-col cols="12" md="6" lg="5">
                                <div class="content-text">
                                    <div class="content-text-border">
                                        <span class="text-border">¡EY!</span><br>
                                    </div>
                                    <div class="content-text-seconds">
                                        <span class="text-seconds">qué tal?</span>
                                    </div>
                                </div>
                            </v-col>
                            <v-col cols="12" md="1" lg="1">
                                <div class="linea-div">
                                </div>
                            </v-col>
                            <v-col cols="12" md="6" lg="6">
                                <div class="container-form">
                                    <v-row class="text-quicksand">
                                        <v-col class="mt-lg-15" cols="12" md="6" lg="7">
                                            <label >Hola!</label>
                                            <v-text-field
                                                v-model="nombre"
                                                color="teal darken-4"
                                                label="Escribe tu nombre aquí"
                                            ></v-text-field>
                                        </v-col>
                                    </v-row>
                                    <v-row class="text-quicksand">
                                        <v-col class="mt-lg-15" cols="12" md="6" lg="7">
                                            <label>Hablemos!</label>
                                            <v-text-field
                                                v-model="NumeroCel"
                                                color="teal darken-4"
                                                label="Escribe tu numero de contacto"
                                            ></v-text-field>
                                        </v-col>
                                    </v-row>
                                    <v-row class="text-quicksand">
                                        <v-col class="mt-lg-15" cols="12" md="6" lg="7">
                                            <label >Te contactaremos por correo!</label>
                                            <v-text-field
                                                v-model="Email"
                                                color="teal darken-4"
                                                label="Escribe tu electronico"
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
                    </div>
                </v-stepper-content> 
                <v-stepper-content step="2">
                    <div>
                        <v-row>
                            <v-col cols="12" md="6" lg="5">
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
                                <div class="container-form-hablemos">
                                    <v-row class="text-quicksand">
                                        <v-col class="mt-lg-15" cols="12" md="6" lg="7">
                                            <label >Nombre de tu marca</label>
                                            <v-text-field
                                                v-model="NameMarca"
                                                hide-details
                                                color="teal darken-4"
                                                label="Escribe el nombre de tu marca"
                                            ></v-text-field>
                                        </v-col>
                                    </v-row>
                                    <v-row class="text-quicksand">
                                        <v-col class="mt-lg-15" cols="12" md="6" lg="7">
                                            <label>Cual es tu actividad  principal?</label>
                                            <v-text-field
                                                v-model="FunctionSite"
                                                hide-details
                                                color="teal darken-4"
                                                label="Escribe cuál es la funcion principal del sitio web"
                                            ></v-text-field>
                                        </v-col>
                                    </v-row>
                                    <v-row class="text-quicksand">
                                        <v-col class="mt-lg-15" cols="12" md="6" lg="7">
                                            <label >De que tamaño es tu empresa</label>
                                            <v-text-field
                                                v-model="tamEmpresa"
                                                label="Tipo de trámite *"
                                                hide-details
                                            ></v-text-field>
                                        </v-col>
                                    </v-row>
                                    <v-row class="text-quicksand">
                                        <v-col class="mt-lg-15" cols="12" md="6" lg="7">
                                            <label >Donde hacen presencia?</label>
                                            <v-text-field
                                                hide-details
                                                v-model="Presencia"
                                                color="teal darken-4"
                                                label="Escribe lugares donde hace presencia tu marca"
                                            ></v-text-field>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col class="text-quicksand" justify="center" align="end" cols="7">
                                            <v-btn
                                                color="#29ABE2"
                                                style="color: white"
                                                @click="e1 = 3"
                                            >
                                                Avanzar <v-icon>mdi-arrow-right-drop-circle-outline</v-icon>
                                            </v-btn>
                                        </v-col>
                                    </v-row>
                                </div>
                            </v-col>
                        </v-row>
                    </div>
                </v-stepper-content> 
                <v-stepper-content step="3">
                    <div>
                        <v-row>
                            <v-col cols="12" md="6" lg="5">
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
                                <div class="container-form-hablemos2">
                                    <v-row class="text-quicksand">
                                        <v-col class="mt-lg-15" cols="12" md="6" lg="7">
                                            <label>Estado del sitio web</label>
                                            <v-checkbox
                                                v-model="DisenoCero"
                                                label="Diseño desde 0"
                                                hide-details
                                            ></v-checkbox>
                                            <v-checkbox
                                                v-model="Rediseno"
                                                label="Rediseño del sitio existente"
                                                hide-details
                                            ></v-checkbox>
                                            <v-checkbox
                                                v-model="Plantilla"
                                                label="Plantilla web"
                                                hide-details
                                            ></v-checkbox>
                                        </v-col>
                                    </v-row>
                                    <v-row class="text-quicksand">
                                        <v-col class="mt-lg-15" cols="12" md="6" lg="7">
                                           <label >A quién va dirigido?</label>
                                            <v-text-field
                                                v-model="Dirigido"
                                                hide-details
                                                color="teal darken-4"
                                                label="Escribe a quien va dirigido el sitio"
                                            ></v-text-field>
                                        </v-col>
                                    </v-row>
                                    <v-row class="text-quicksand">
                                        <v-col class="mt-lg-15" cols="12" md="6" lg="7">
                                            <label>Estado del sitio web</label>
                                            <v-checkbox
                                                v-model="Corporativo"
                                                label="Corporativo"
                                                hide-details
                                            ></v-checkbox>
                                            <v-checkbox
                                                v-model="Landig"
                                                label="Landig Page"
                                                hide-details
                                            ></v-checkbox>
                                            <v-checkbox
                                                v-model="IntraExtra"
                                                label="Intranet o extranet"
                                                hide-details
                                            ></v-checkbox>
                                            <v-checkbox
                                                v-model="Commerce"
                                                label="E-commerce"
                                                hide-details
                                            ></v-checkbox>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col class="text-quicksand" justify="center" align="end" cols="7">
                                            <v-btn
                                                color="#29ABE2"
                                                style="color: white"
                                                @click="e1 = 4"
                                            >
                                                Avanzar <v-icon>mdi-arrow-right-drop-circle-outline</v-icon>
                                            </v-btn>
                                        </v-col>
                                    </v-row>
                                </div>
                            </v-col>
                        </v-row>
                    </div>
                </v-stepper-content> 
                <v-stepper-content step="4">
                    <div>
                        <v-row>
                            <v-col cols="12" md="6" lg="5">
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
                                <div class="container-form-identidad">
                                    <v-row class="text-quicksand">
                                        <v-col class="mt-lg-15" cols="12" md="6" lg="7">
                                            <label>Cuentan con colores corporativos?</label>
                                            <v-checkbox
                                                v-model="Colores"
                                                label="Si"
                                                hide-details
                                            ></v-checkbox>
                                            <v-checkbox
                                                v-model="Colores"
                                                label="No"
                                                hide-details
                                            ></v-checkbox>
                                            <v-text-field
                                                v-model="ColorCual"
                                                hide-details
                                                color="teal darken-4"
                                                label="Cuales son los colores"
                                            ></v-text-field>
                                        </v-col>
                                    </v-row>
                                    <v-row class="text-quicksand">
                                        <v-col class="mt-lg-15" cols="12" md="6" lg="7">
                                            <label>Objetivo del sitio web</label>
                                            <v-checkbox
                                                v-model="MejorarDiseno"
                                                label="Mejorar el diseño"
                                                hide-details
                                            ></v-checkbox>
                                            <v-checkbox
                                                v-model="Optimizar"
                                                label="Optimización SEO"
                                                hide-details
                                            ></v-checkbox>
                                            <v-checkbox
                                                v-model="MejorarVentas"
                                                label="Mejorar ventas"
                                                hide-details
                                            ></v-checkbox>
                                            <v-checkbox
                                                v-model="Todas"
                                                label="Todas las anteriores"
                                                hide-details
                                            ></v-checkbox>
                                            <v-checkbox
                                                v-model="Otra"
                                                label="Otra"
                                                hide-details
                                            ></v-checkbox>
                                            <v-text-field
                                                v-model="OpcionObjetivo"
                                                hide-details
                                                color="teal darken-4"
                                                label="Cuales son los colores"
                                            ></v-text-field>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col class="text-quicksand" justify="center" align="end" cols="7">
                                            <v-btn
                                                color="#29ABE2"
                                                style="color: white"
                                                @click="e1 = 5"
                                            >
                                                Avanzar <v-icon>mdi-arrow-right-drop-circle-outline</v-icon>
                                            </v-btn>
                                        </v-col>
                                    </v-row>
                                </div>
                            </v-col>
                        </v-row>
                    </div>
                </v-stepper-content> 
                <v-stepper-content step="5">
                    <div>
                        <v-row>
                            <v-col cols="12" md="6" lg="5">
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
                                <div class="container-form-identidad2">
                                    <v-row class="text-quicksand">
                                        <v-col class="mt-lg-15" cols="12" md="6" lg="7">
                                            <label>Hace cuanto se diseñó el sitio?</label>
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
                                        <v-col class="mt-lg-15" cols="12" md="6" lg="7">
                                            <label>Puntos a favor</label>
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
                                        <v-col class="mt-lg-15" cols="12" md="6" lg="7">
                                            <label>Puntos en contra</label>
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
                                        <v-col class="text-quicksand" justify="center" align="end" cols="7">
                                            <v-btn
                                                color="#29ABE2"
                                                style="color: white"
                                                @click="e1 = 6"
                                            >
                                                Avanzar <v-icon>mdi-arrow-right-drop-circle-outline</v-icon>
                                            </v-btn>
                                        </v-col>
                                    </v-row>
                                </div>
                            </v-col>
                        </v-row>
                    </div>
                </v-stepper-content>
                <v-stepper-content step="6">
                    <div>
                        <v-row>
                            <v-col cols="12" md="6" lg="5">
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
                                <div class="container-form-identidad2">
                                    <v-row class="text-quicksand">
                                        <v-col class="mt-lg-15" cols="12" md="6" lg="7">
                                            <label>Cómo es el mapa de navegación?</label>
                                            <v-text-field
                                                v-model="MapNav"
                                                hide-details
                                                color="teal darken-4"
                                                label="Donde esta alojada"
                                            ></v-text-field>
                                        </v-col>
                                    </v-row>
                                    <v-row class="text-quicksand">
                                        <v-col class="mt-lg-15" cols="12" md="6" lg="7">
                                            <label>Cuentan con Backup</label>
                                            <v-text-field
                                                v-model="Backup"
                                                hide-details
                                                color="teal darken-4"
                                                label="Donde esta alojada"
                                            ></v-text-field>
                                        </v-col>
                                    </v-row>
                                    <v-row class="text-quicksand">
                                        <v-col class="mt-lg-15" cols="12" md="6" lg="7">
                                            <label>contenido para Footer</label>
                                            <v-text-field
                                                v-model="ContFooter"
                                                hide-details
                                                color="teal darken-4"
                                                label="Donde esta alojada"
                                            ></v-text-field>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col class="text-quicksand" justify="center" align="end" cols="7">
                                            <v-btn
                                                color="#29ABE2"
                                                style="color: white"
                                                @click="e1 = 7"
                                            >
                                                Avanzar <v-icon>mdi-arrow-right-drop-circle-outline</v-icon>
                                            </v-btn>
                                        </v-col>
                                    </v-row>
                                </div>
                            </v-col>
                        </v-row>
                    </div>
                </v-stepper-content> 
                <v-stepper-content step="7">
                    <div>
                        <v-row>
                            <v-col cols="12" md="6" lg="5">
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
                                <div class="container-form-identidad2">
                                    <v-row class="text-quicksand">
                                        <v-col class="mt-lg-15" cols="12" md="6" lg="7">
                                            <label>Donde está alojada la web?</label>
                                            <v-text-field
                                                v-model="Alojamiento"
                                                hide-details
                                                color="teal darken-4"
                                                label="Donde esta alojada"
                                            ></v-text-field>
                                        </v-col>
                                    </v-row>
                                    <v-row class="text-quicksand">
                                        <v-col class="mt-lg-15" cols="12" md="6" lg="7">
                                            <label>Cuentan con Backup?</label>
                                            <v-row>
                                                <v-col cols="12" md="3" lg="3">
                                                    <v-checkbox
                                                        v-model="BackupsAlojam"
                                                        label="Si"
                                                        hide-details
                                                    ></v-checkbox>
                                                </v-col>
                                                <v-col cols="12" md="3" lg="3">
                                                    <v-checkbox
                                                        v-model="BackupsAlojam"
                                                        label="No"
                                                        hide-details
                                                    ></v-checkbox>
                                                </v-col>
                                            </v-row>
                                        </v-col>
                                    </v-row>
                                    <v-row class="text-quicksand">
                                        <v-col class="mt-lg-15" cols="12" md="6" lg="7">
                                            <label>Cuentan con CDN?</label>
                                            <v-row>
                                                <v-col cols="12" md="3" lg="3">
                                                    <v-checkbox
                                                        v-model="CdnSi"
                                                        label="Si"
                                                        hide-details
                                                    ></v-checkbox>
                                                </v-col>
                                                <v-col cols="12" md="3" lg="3">
                                                    <v-checkbox
                                                        v-model="CdnNo"
                                                        label="No"
                                                        hide-details
                                                    ></v-checkbox>
                                                </v-col>
                                                <v-col cols="12" md="6" lg="6">
                                                    <v-text-field
                                                        v-model="CdnCual"
                                                        hide-details
                                                        color="teal darken-4"
                                                        label="Cuál:"
                                                    ></v-text-field>
                                                </v-col>
                                            </v-row>   
                                        </v-col>
                                    </v-row>
                                    <v-row class="text-quicksand">
                                        <v-col class="mt-lg-15" cols="12" md="6" lg="7">
                                            <label>Cuentan con SSL?</label>
                                            <v-row>
                                                <v-col cols="12" md="3" lg="3">
                                                    <v-checkbox
                                                        v-model="Ssl"
                                                        label="Si"
                                                        hide-details
                                                    ></v-checkbox>
                                                </v-col>
                                                <v-col cols="12" md="3" lg="3">
                                                    <v-checkbox
                                                        v-model="Ssl"
                                                        label="No"
                                                        hide-details
                                                    ></v-checkbox>
                                                </v-col>
                                                <v-col cols="12" md="6" lg="6">
                                                    <v-text-field
                                                        v-model="SslCual"
                                                        hide-details
                                                        color="teal darken-4"
                                                        label="Cuál:"
                                                    ></v-text-field>
                                                </v-col>
                                            </v-row>   
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col class="text-quicksand" justify="center" align="end" cols="7">
                                            <v-btn
                                                color="#29ABE2"
                                                style="color: white"
                                                @click="e1 = 8"
                                            >
                                                Avanzar <v-icon>mdi-arrow-right-drop-circle-outline</v-icon>
                                            </v-btn>
                                        </v-col>
                                    </v-row>
                                </div>
                            </v-col>
                        </v-row>
                    </div>
                </v-stepper-content> 
                <v-stepper-content step="8">
                    <div>
                        <v-row>
                            <v-col cols="12" md="6" lg="5">
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
                                <div class="container-form-hablemos3">
                                    <v-row class="text-quicksand">
                                        <v-col class="mt-lg-15" cols="12" md="6" lg="7">
                                            <label>Tu presupuesto es de</label>
                                            <v-text-field
                                                v-model="Presupuesto"
                                                hide-details
                                                color="teal darken-4"
                                                label="Cuanto es tu presupuesto"
                                            ></v-text-field>
                                        </v-col>
                                    </v-row>
                                    
                                    <v-row>
                                        <v-col class="text-quicksand" justify="center" align="end" cols="7">
                                            <v-btn
                                                color="#29ABE2"
                                                style="color: white"
                                                @click="e1 = 9"
                                            >
                                                Avanzar <v-icon>mdi-arrow-right-drop-circle-outline</v-icon>
                                            </v-btn>
                                        </v-col>
                                    </v-row>
                                </div>
                            </v-col>
                        </v-row>
                    </div>
                </v-stepper-content>  
                <v-stepper-content step="9">
                    <div>
                        <v-row>
                            <v-col cols="12" md="6" lg="5">
                                <div class="content-text">
                                    <div class="content-text-border">
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
                            <v-col cols="12" md="6" lg="6">
                                <div class="container-form-hablemos3">
                                    <v-row class="text-quicksand">
                                        <v-col class="mt-lg-15" cols="12" md="6" lg="6">
                                            <v-row>
                                                <v-col>
                                                    <label>Mantenimiento</label>
                                                    <v-checkbox
                                                        v-model="MantenimientoInterno"
                                                        label="interno"
                                                        hide-details
                                                    ></v-checkbox>
                                                    <v-checkbox
                                                        v-model="MantenimientoAgenci"
                                                        label="Agencia"
                                                        hide-details
                                                    ></v-checkbox>
                                                </v-col>
                                            </v-row>
                                            <v-row>
                                                <v-col  cols="12" md="2" lg="2">
                                                    <v-checkbox
                                                        v-model="CRM"
                                                        label="CRM"
                                                        hide-details
                                                    ></v-checkbox>
                                                </v-col>
                                                <v-col  cols="12" md="5" lg="5">
                                                    <v-checkbox
                                                        v-model="SistChat"
                                                        label="Sistema de chat"
                                                        hide-details
                                                    ></v-checkbox>
                                                </v-col>
                                                <v-col  cols="12" md="5" lg="5">
                                                    <v-checkbox
                                                        v-model="Foro"
                                                        label="Foro"
                                                        hide-details
                                                    ></v-checkbox>
                                                </v-col>
                                                <v-col  cols="12" md="4" lg="4">
                                                    <v-checkbox
                                                        v-model="Reseva"
                                                        label="Reservas"
                                                        hide-details
                                                    ></v-checkbox>
                                                </v-col>
                                                <v-col  cols="12" md="4" lg="4">
                                                    <v-checkbox
                                                        v-model="GoogleMaps"
                                                        label="Google Maps"
                                                        hide-details
                                                    ></v-checkbox>
                                                </v-col>
                                                <v-col  cols="12" md="4" lg="4">
                                                    <v-checkbox
                                                        v-model="Calendario"
                                                        label="Calendario"
                                                        hide-details
                                                    ></v-checkbox>
                                                </v-col>
                                                <v-col  cols="12" md="7" lg="7">
                                                    <v-checkbox
                                                        v-model="SectionPriv"
                                                        label="Sección privada para Cliente/Proveedor"
                                                        hide-details
                                                    ></v-checkbox>
                                                </v-col>
                                            </v-row>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col class="text-quicksand" justify="center" align="end" cols="7">
                                            <v-btn
                                                color="#29ABE2"
                                                style="color: white"
                                                @click="enviarBrief"
                                            >
                                                Envier Brief <v-icon>mdi-arrow-right-drop-circle-outline</v-icon>
                                            </v-btn>
                                        </v-col>
                                    </v-row>
                                </div>
                            </v-col>
                        </v-row>
                    </div>
                </v-stepper-content>  
            </v-stepper-items>
            <v-row justify="center" align="center">
            <v-col justify="center" align="center" cols="12" sm="12" md="12" lg="12">
                <v-snackbar
                    class="pb-8"
                    :timeout="3000"
                    :value="snackbar"
                    :color="colorSnack"
                    outlined
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
                snackbar: true,
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
                //----
                DisenoCero:false,
                Rediseno:false,
                Plantilla:false,
                Dirigido:'',
                Corporativo:false,
                Landig:false,
                IntraExtra:false,
                Commerce:false,
                //--- Identidad
                Colores:false,
                ColorCual:'',
                MejorarDiseno:false,
                Optimizar:false,
                MejorarVentas:false,
                Todas:false,
                Otra:false,
                OpcionObjetivo:'',
                // Situacion actual
                TimeSite:'',
                PuntoFavor:'',
                PuntoContra:'',
                // estructura
                MapNav:'',
                Backup:'',
                ContFooter:'',
                //Aspectos tecnicos
                Alojamiento:'',
                BackupsAlojam:false,
                Cdn:false,
                CdnCual:'',
                Ssl:false,
                SslCual:'',
                Presupuesto:'',
                MantenimientoInterno:false,
                MantenimientoAgenci:false,
                CRM:false,
                SistChat:false,
                Foro:false,
                Reseva:false,
                GoogleMaps:false,
                Calendario:false,
                SectionPriv:false,
                
            }
            
        },
        methods:{
            async enviarBrief(){
                this.botton = false
                this.loading = true
                this.snackbar = true
                this.colorSnack = 'green accent-4'
                this.message = 'Se esta procesando su informacion por favor espere...'

                if(this.nombre !== '' && this.NumeroCel !== '' && this.Email !== '' && this.NameMarca !== '' && this.FunctionSite !== '' && this.tamEmpresa !== '' && this.Presencia !== '' && this.TimeSite!== '' &&this.PuntoFavor!== '' &&this.PuntoContra!== '' && this.MapNav!== '' &&this.Backup!== '' &&this.ContFooter !== '' && this.Alojamiento !==''){
                    const data = {
                        nombre:this.nombre,
                        NumeroCel:this.NumeroCel,
                        Email:this.Email,
                        // Hablos del sitio
                        NameMarca:this.NameMarca,
                        FunctionSite:this.FunctionSite,
                        tamEmpresa:this.tamEmpresa,
                        Presencia:this.Presencia,
                        //----
                        DisenoCero:this.DisenoCero,
                        Rediseno:this.Rediseno,
                        Plantilla:this.Plantilla,
                        Dirigido:this.Dirigido,
                        Corporativo:this.Corporativo,
                        Landig:this.Landig,
                        IntraExtra:this.IntraExtra,
                        Commerce:this.Commerce,
                        //---
                        Colores:this.ColoreSi,
                        ColorCual:this.ColorCual,
                        MejorarDiseno:this.MejorarDiseno,
                        Optimizar:this.Optimizar,
                        MejorarVentas:this.MejorarVentas,
                        Todas:this.Todas,
                        Otra:this.Otra,
                        OpcionObjetivo:this.OpcionObjetivo,
                        // identidad
                        TimeSite:this.TimeSite,
                        PuntoFavor:this.PuntoFavor,
                        PuntoContra:this.PuntoContra,
                        // estructura
                        MapNav:this.MapNav,
                        Backup:this.Backup,
                        ContFooter:this.ContFooter,
                        //Aspectos tecnicos
                        Alojamiento:this.Alojamiento,
                        BackupSi:this.BackupSi,
                        BackupNo:this.BackupNo,
                        CdnSi:this.CdnSi,
                        CdnNo:this.CdnNo,
                        CdnCual:this.CdnCual,
                        SslSi:this.SslSi,
                        SslNo:this.SslNo,
                        SslCual:this.SslCual,
                        Presupuesto1:this.Presupuesto1,
                        Presupuesto2:this.Presupuesto2,
                        Presupuesto3:this.Presupuesto3,
                        MantenimientoInterno:this.MantenimientoInterno,
                        MantenimientoAgenci:this.MantenimientoAgenci,
                        CRM:this.CRM,
                        SistChat:this.SistChat,
                        Foro:this.Foro,
                        Reseva:this.Reseva,
                        GoogleMaps:this.GoogleMaps,
                        Calendario:this.Calendario,
                        SectionPriv:this.SectionPriv,   
                    }
                    const resonse = await post.SendBriefDesarrolloWeb(data)
                    console.log(data)
                }
            }
        }
    }
</script>
