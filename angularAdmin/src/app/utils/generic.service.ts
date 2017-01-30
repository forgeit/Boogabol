import { Headers, Http } from '@angular/http';
import { environment } from '../../environments/environment';


export class GenericService {
	public headers = new Headers({		
		'Content-Type': 'application/json' 		
	});
	

	public urlSrv: string;
	environment:any = environment;

	constructor(public http: Http){
		this.urlSrv = this.environment.serverUrl;
	}

	getList(): Promise<any> {		
		return this.defaultPromise(this.http.get(this.urlSrv));
	}

	getElem(id: number): Promise<any> {
		return this.defaultPromise(this.http.get(this.urlSrv+"/find/"+id));
	}

	update(elem: any): Promise<any> {
		return this.defaultPromise(this.http.put(this.urlSrv+"/update", JSON.stringify(elem), {headers: this.headers}));
	}

	insert(elem: any): Promise<any> {
		return this.defaultPromise(this.http.post(this.urlSrv+"/insert", JSON.stringify(elem), {headers: this.headers}));		
	}

	remove(id: number): Promise<any> {
		return this.defaultPromise(this.http.delete(this.urlSrv+"/remove/"+id));		
	}


	defaultPromise(prom: any): Promise<any> {
		return prom.toPromise()
		.then(response => response.json())
		.catch(this.handleError);
	}	
	
	private handleError(error: any): Promise<any> {
		alert('Erro ao conectar com o Servidor');		
		return Promise.reject(error.message || error);
	}
}