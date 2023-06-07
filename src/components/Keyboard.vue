<template>
<!-- eslint-disable -->
    <div class="keyboard d-flex justify-center align-center">
         <!-- Numerico -->
        <div class="keys-numeric" v-if="keyboard == 'numeric' || keyboard == 'numeric-1'">
            <div class="row-test d-flex">
                <div class="key" @click="add('1')">
                    1
                </div>
                <div class="key" @click="add('2')">
                    2
                </div>
                <div class="key" @click="add('3')">
                    3
                </div>
            </div>
            <div class="row-test d-flex">
                <div class="key" @click="add('4')">
                    4
                </div>
                <div class="key" @click="add('5')">
                    5
                </div>
                <div class="key" @click="add('6')">
                    6
                </div>
            </div>
            <div class="row-test d-flex">
                <div class="key" @click="add('7')">
                    7
                </div>
                <div class="key" @click="add('8')">
                    8
                </div>
                <div class="key" @click="add('9')">
                    9
                </div>
            </div>
            <div class="row-test d-flex">
                <!-- <div class="row-key d-flex justify-center">
                    <div class="key clear" style="width: 100%" @click="clear">
                        Limpar
                    </div>
                </div> -->
                <div class="key" style="font-size: 25px" @click="clear">
                    Limpar
                </div>
                <div class="key" @click="add('0')">
                    0
                </div>
                <div class="key" @click="remove">
                    <v-icon color="white" x-large>{{ icons.mdiBackspaceOutline }}</v-icon>
                </div>
            </div>
            <div class="justify-center" v-if="keyboard === 'numeric-1'">                    
                <div class="key continue text-h6" style="width: 100%" @click="$emit('continue')" v-if="keyboard == 'numeric-1'">
                    Continuar
                </div>
            </div>
        </div>

        <!-- Literal -->
        <div class="keys lower" v-if="keyboard == 'literal' || keyboard == 'email'">
        <!-- 1ª Linha -->
            <div class="row-test d-flex">
                <div class="key" @click="add('1')">
                    1
                </div>
                <div class="key" @click="add('2')">
                    2
                </div>
                <div class="key" @click="add('3')">
                    3
                </div>
                <div class="key" @click="add('4')">
                    4
                </div>
                <div class="key" @click="add('5')">
                    5
                </div>
                <div class="key" @click="add('6')">
                    6
                </div>
                <div class="key" @click="add('7')">
                    7
                </div>
                <div class="key" @click="add('8')">
                    8
                </div>
                <div class="key" @click="add('9')">
                    9
                </div>
                <div class="key" @click="add('0')">
                    0
                </div>
            </div>
            
        <!-- 2ª Linha -->
            <!-- Letras -->
            <div class="row-test d-flex" v-if="!accentuation && !especial">
                <div class="key" @click="add(alterLetter('q'))">
                    {{alterLetter('q')}}
                </div>
                <div class="key" @click="add(alterLetter('w'))">
                    {{alterLetter('w')}}
                </div>
                <div class="key" @click="add(alterLetter('e'))">
                    {{alterLetter('e')}}
                </div>
                <div class="key" @click="add(alterLetter('r'))">
                    {{alterLetter('r')}}
                </div>
                <div class="key" @click="add(alterLetter('t'))">
                    {{alterLetter('t')}}
                </div>
                <div class="key" @click="add(alterLetter('y'))">
                    {{alterLetter('y')}}
                </div>
                <div class="key" @click="add(alterLetter('u'))">
                    {{alterLetter('u')}}
                </div>
                <div class="key" @click="add(alterLetter('i'))">
                    {{alterLetter('i')}}
                </div>
                <div class="key" @click="add(alterLetter('o'))">
                    {{alterLetter('o')}}
                </div>
                <div class="key" @click="add(alterLetter('p'))">
                    {{alterLetter('p')}}
                </div>
            </div>
            <!-- Letras com acentuação -->
            <div class="row-test d-flex" v-else-if="accentuation && !especial">
                <div class="key" @click="add(alterLetter('à'))">
                    {{alterLetter('à')}}
                </div>
                <div class="key" @click="add(alterLetter('á'))">
                    {{alterLetter('á')}}
                </div>
                <div class="key" @click="add(alterLetter('â'))">
                    {{alterLetter('â')}}
                </div>
                <div class="key" @click="add(alterLetter('ã'))">
                    {{alterLetter('ã')}}
                </div>
                <div class="key" @click="add(alterLetter('ä'))">
                    {{alterLetter('ä')}}
                </div>
                <div class="key" @click="add(alterLetter('è'))">
                    {{alterLetter('è')}}
                </div>
                <div class="key" @click="add(alterLetter('é'))">
                    {{alterLetter('é')}}
                </div>
                <div class="key" @click="add(alterLetter('ê'))">
                    {{alterLetter('ê')}}
                </div>                
                <div class="key" @click="add(alterLetter('ë'))">
                    {{alterLetter('ë')}}
                </div>                
                <div class="key" @click="add(alterLetter('ì'))">
                    {{alterLetter('ì')}}
                </div>

            </div>
            <!-- Especiais -->
            <div class="row-test d-flex" v-else>
                <div class="key other" @click="add('!')">                    
                    {{alterLetter('!')}}
                </div>
                <div class="key" @click="add(alterLetter('@'))">
                    {{alterLetter('@')}}
                </div>
                <div class="key" @click="add(alterLetter('#'))">
                    {{alterLetter('#')}}
                </div>
                <div class="key" @click="add(alterLetter('$'))">
                    {{alterLetter('$')}}
                </div>
                <div class="key" @click="add(alterLetter('%'))">
                    {{alterLetter('%')}}
                </div>
                <div class="key" @click="add(alterLetter('&'))">
                    {{alterLetter('&')}}
                </div>
                <div class="key" @click="add(alterLetter('*'))">
                    {{alterLetter('*')}}
                </div>
                <div class="key" @click="add(alterLetter(`(`))">
                    {{alterLetter(`(`)}}
                </div>
                <div class="key" @click="add(alterLetter(`)`))">
                    {{alterLetter(`)`)}}
                </div>
                <div class="key" @click="add(alterLetter(`-`))">
                    {{alterLetter(`-`)}}
                </div>
            </div>
            
        <!-- 3ª Linha -->
            <!-- Letras -->
            <div class="row-test d-flex" v-if="!accentuation && !especial">
                <div class="key" @click="add(alterLetter('a'))">
                    {{alterLetter('a')}}
                </div>
                <div class="key" @click="add(alterLetter('s'))">
                    {{alterLetter('s')}}
                </div>
                <div class="key" @click="add(alterLetter('d'))">
                    {{alterLetter('d')}}
                </div>
                <div class="key" @click="add(alterLetter('f'))">
                    {{alterLetter('f')}}
                </div>
                <div class="key" @click="add(alterLetter('g'))">
                    {{alterLetter('g')}}
                </div>
                <div class="key" @click="add(alterLetter('h'))">
                    {{alterLetter('h')}}
                </div>
                <div class="key" @click="add(alterLetter('j'))">
                    {{alterLetter('j')}}
                </div>
                <div class="key" @click="add(alterLetter('k'))">
                    {{alterLetter('k')}}
                </div>
                <div class="key" @click="add(alterLetter('l'))">
                    {{alterLetter('l')}}
                </div>
                <div class="key" @click="add(alterLetter('ç'))">
                    {{alterLetter('ç')}}
                </div>
            </div>
            <!-- Letras com acentuação -->
            <div class="row-test d-flex" v-else-if="accentuation && !especial">
                <div class="key" @click="add(alterLetter('í'))">
                    {{alterLetter('í')}}
                </div>
                <div class="key" @click="add(alterLetter('î'))">
                    {{alterLetter('î')}}
                </div>
                <div class="key" @click="add(alterLetter('ï'))">
                    {{alterLetter('ï')}}
                </div>
                <div class="key" @click="add(alterLetter('ò'))">
                    {{alterLetter('ò')}}
                </div>
                <div class="key" @click="add(alterLetter('ó'))">
                    {{alterLetter('ó')}}
                </div>
                <div class="key" @click="add(alterLetter('ô'))">
                    {{alterLetter('ô')}}
                </div>
                <div class="key" @click="add(alterLetter('õ'))">
                    {{alterLetter('õ')}}
                </div>
                <div class="key" @click="add(alterLetter('ö'))">
                    {{alterLetter('ö')}}
                </div>                
                <div class="key" @click="add(alterLetter('ù'))">
                    {{alterLetter('ù')}}
                </div>                
                <div class="key" @click="add(alterLetter('ú'))">
                    {{alterLetter('ú')}}
                </div>

            </div>
            <!-- Especiais -->
            <div class="row-test d-flex" v-else>
                <div class="key other" @click="add('_')">                    
                    {{alterLetter('_')}}
                </div>
                <div class="key" @click="add(alterLetter('='))">
                    {{alterLetter('=')}}
                </div>
                <div class="key" @click="add(alterLetter('/'))">
                    {{alterLetter('/')}}
                </div>
                <div class="key" @click="add(alterLetter('\\'))">
                    {{alterLetter('\\')}}
                </div>
                <div class="key" @click="add(alterLetter('<'))">
                    {{alterLetter('<')}}
                </div>
                <div class="key" @click="add(alterLetter('>'))">
                    {{alterLetter('>')}}
                </div>
                <div class="key" @click='add(alterLetter(`:`))'>
                    {{alterLetter(':')}}
                </div>
                <div class="key" @click="add(alterLetter(`.`))">
                    {{alterLetter(`.`)}}
                </div>
                <div class="key" @click="add(alterLetter(`+`))">
                    {{alterLetter(`+`)}}
                </div>
                <div class="key" @click="add(alterLetter(`?`))">
                    {{alterLetter(`?`)}}
                </div>
            </div>
            
        <!-- 4ª Linha -->
            <!-- Letras -->
            <div class="row-test d-flex" v-if="!accentuation && !especial">
                <div v-if="keyboard == 'literal'" class="key other" @click="upperCase = !upperCase">
                    <v-icon color="white" x-large>{{ upperCase ? icons.mdiUpload : icons.mdiUploadOutline  }}</v-icon>
                </div>                
                <div v-if="keyboard == 'email'" class="key other" @click="add('.com')">
                    .com
                </div>
                <div class="key" @click="add(alterLetter('z'))">
                    {{alterLetter('z')}}
                </div>
                <div class="key" @click="add(alterLetter('x'))">
                    {{alterLetter('x')}}
                </div>
                <div class="key" @click="add(alterLetter('c'))">
                    {{alterLetter('c')}}
                </div>
                <div class="key" @click="add(alterLetter('v'))">
                    {{alterLetter('v')}}
                </div>
                <div class="key" @click="add(alterLetter('b'))">
                    {{alterLetter('b')}}
                </div>
                <div class="key" @click="add(alterLetter('n'))">
                    {{alterLetter('n')}}
                </div>
                <div class="key" @click="add(alterLetter('m'))">
                    {{alterLetter('m')}}
                </div>
                <div class="key other" @click="remove">            
                    <v-icon color="white" x-large>{{ icons.mdiBackspaceOutline }}</v-icon>
                </div>
            </div>
            <!-- Letras com acentuação -->
            <div class="row-test d-flex" v-else-if="accentuation && !especial">
                <div v-if="keyboard == 'literal'" class="key other" @click="upperCase = !upperCase">
                    <v-icon color="white" x-large>{{ upperCase ? icons.mdiUpload : icons.mdiUploadOutline  }}</v-icon>
                </div>                
                <div v-if="keyboard == 'email'" class="key other" @click="add('.com')">
                    .com
                </div>
                <div class="key" @click="add(alterLetter('û'))">
                    {{alterLetter('û')}}
                </div>
                <div class="key" @click="add(alterLetter('ü'))">
                    {{alterLetter('ü')}}
                </div>
                <div class="key">
                </div>
                <div class="key">
                </div>
                <div class="key">
                </div>
                <div class="key">
                </div>
                <div class="key">
                </div>
                <div class="key other" @click="remove">            
                    <v-icon color="white" x-large>{{ icons.mdiBackspaceOutline }}</v-icon>
                </div>
            </div>
            <!-- Especiais -->
            <div class="row-test d-flex" v-else>
                <div class="key other" @click="add('.com')">
                    .com
                </div>
                <div class="key" @click="add(alterLetter('{'))">
                    {{alterLetter('{')}}
                </div>
                <div class="key" @click="add(alterLetter('}'))">
                    {{alterLetter('}')}}
                </div>
                <div class="key" @click="add(alterLetter('['))">
                    {{alterLetter('[')}}
                </div>
                <div class="key" @click="add(alterLetter(']'))">
                    {{alterLetter(']')}}
                </div>
                <div class="key" @click="add(alterLetter('|'))">
                    {{alterLetter('|')}}
                </div>
                <div class="key" @click='add(alterLetter(`"`))'>
                    {{alterLetter('"')}}
                </div>
                <div class="key" @click="add(alterLetter(`'`))">
                    {{alterLetter(`'`)}}
                </div>
                <div class="key other" @click="remove">            
                    <v-icon color="white" x-large>{{ icons.mdiBackspaceOutline }}</v-icon>
                </div>
            </div>
            
            <!-- 5ª Linha -->
            <div class="row-key d-flex">
                <div class="key clear" @click="clear">
                    Limpar
                </div>
                <div class="key other" @click="especial = !especial;accentuation = false" v-if="!especial">
                    <b>@_-</b>
                </div>
                <div class="key other" @click="especial = !especial;accentuation = false" v-if="especial">
                    {{alterLetter('abc')}}
                </div>


                <div class="key other" @click="accentuation = !accentuation;especial = false" v-if="!accentuation">
                    {{alterLetter('áàã')}}
                </div>
                <div class="key other" @click="accentuation = !accentuation;especial = false" v-if="accentuation">                    
                    {{alterLetter('abc')}}
                </div>

                <div class="key space-literal" @click="add(' ')">
                    <v-icon color="white" x-large>{{ icons.mdiKeyboardSpace }}</v-icon>
                </div>
                <div class="key continue" @click="$emit('continue')">
                    Continuar
                </div>
            </div>
        </div> 
    </div>
</template>

<script>
/* eslint-disable */
import { mdiBackspaceOutline, mdiUpload, mdiUploadOutline, mdiKeyboardSpace } from '@mdi/js';

export default {
    data(){
        return {
            icons: {
                mdiBackspaceOutline,
                mdiUpload, 
                mdiUploadOutline, 
                mdiKeyboardSpace  
            }, 
            upperCase: false,
            especial: false,
            accentuation: false
            field: null
        }
    },
    props: {
        keyboard: {
            type: String,
            required: true
        }, 
        id: {
            type: String,
            required: false,
        }
    },
    methods:{
        alterLetter(letter){
            if(this.upperCase == false){
                return letter.toLowerCase();
            } else {
                return letter.toUpperCase();
            }
        },
        add(letter){
            let field = this.field
            field += letter
            this.$emit('update:field', field)
            this.$emit('keydown', letter)
            if(this.upperCase){
                this.upperCase = false
            }
            if(letter == ' '){
                this.upperCase = true
            }
        }, 
        remove(){
            if(this.field.length){
                let field = this.field
                if(
                    (field.indexOf('.', field.length -2) != -1  || 
                    field.indexOf('-', field.length -2) != -1  ||
                    field.indexOf('/', field.length -2) != -1) && this.keyboard != 'email'                
                ){                    
                    field = field.substr(0, field.length - 2)  
                } else {                        
                    field = field.substr(0, field.length - 1)  
                }              
                this.$emit('update:field', field)
            }
        },
        clear(){
            let field = this.field
            field = ''
            this.$emit('update:field', field)
        },  
        validateCreate(){
            console.log(this.keyboard)
            if(this.keyboard == 'literal'){
                this.upperCase = true
            }
            if(this.keyboard == 'email'){
                this.upperCase = false
            }
        }
    }, 
    created(){
        this.validateCreate();
    }, 
    watch:{
        field(){
            if(this.field.length < 1){                
                this.upperCase = true
            }
        }
    }
}
</script>

<style scoped>
    .keyboard {
        height: 370px;
        background-color: #48484800;
    }

    .keys {
        width: 65vw;
        background-color: #023c4f;
    }
    .keys-numeric{
        background-color: #023c4f;
    }

    .key,
    .key-disabled{
        width: 130px;
        height: 70px;
        color: #F8F8F8;
        font-size: 35px;
        text-align: center;        
        border: 1px solid rgba(228, 228, 228, 0.048);
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }

    .space-email {
        width: 520px;
    }

    .space-literal{
        width: 1040px;
    }

    .continue {
        width: 260px;
        background-color: #00B2BB;
    }

    .clear {
        width: 260px;
        /* background-color: #00B2BB; */
    }

    .other {
        width: 195px;
    }

    .key:hover{
        background-color: #024358;
    }

    .key:active{
        background-color: #035a77;
    }

    .continue:active, .continue:hover{        
        background-color: #00B2BB;
    }

    @media screen and (max-width: 1024px){
        .keys{
            width: 90vw;
        }    
        .key,
        .key-disabled{
            width: 115px;
            height: 59px;
            font-size: 25px;
        }
        .keyboard{
            height: 295px
        }
        .space-email {
            width: 520px;
        }

        .space-literal{
            width: 1000px;
        }

        .continue {
            width: 260px;
            background-color: #00B2BB;
        }
    }


</style>