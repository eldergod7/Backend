import { Injectable, NotFoundException } from '@nestjs/common';
import { NotFoundError, identity } from 'rxjs';

@Injectable()
export class ClientService {

    private clients = [
        {
            id: 1,
            nombre: 'nombre 1', 
            direccion: 'direccion 1'
        },
        {
            id: 2,
            nombre: 'nombre 2', 
            direccion: 'direccion 2 '
        }
    ]

    findAll(){
        return this.clients;
    }

    findById(id: number){

        const client = this.clients.find( c => c.id === id); 

        if(!client){
            throw new NotFoundException(`Client with id ${id} does not exist`); 
        }
        return client;
    }

    updateClient(clientBody, id){
        ///validaciones del cliente
        const client = this.clients.find( c => c.id === id); 

        if(!client){
            throw new NotFoundException(`Client with id ${id} does not exist`); 
        }
        
        //logica para actualizar cliente 

        return {status:'cliente actualizado'}
    }
    deleteClient(id){
        const client = this.clients.find( c => c.id === id); 

        if(!client){
            throw new NotFoundException(`Client with id ${id} does not exist`); 
        }
        
        //logica para actualizar cliente 

        return {status:'cliente eliminado'}
    }

    createClient(clientBody){

        ///validaciones del cliente
        const client = this.clients.find( c => c.id === clientBody.id); 

        if(client){
            throw new NotFoundException(`Client with id ${clientBody.id} exist`); 
        }
        
        //logica para actualizar cliente 

        return {status:'cliente creado'}
    }
}
