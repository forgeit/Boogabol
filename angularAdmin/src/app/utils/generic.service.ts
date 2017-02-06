import { Headers, Http } from '@angular/http';
import { environment } from '../../environments/environment';
import { LocalStorageService } from 'angular-2-local-storage';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';


export class GenericService {
	public headers = new Headers({		
		'Content-Type': 'application/json' 		
	});	

	public urlSrv: string;
	environment:any = environment;

	constructor(public http: Http, public localStorageService: LocalStorageService, private slimLoadingBarService: SlimLoadingBarService){
		this.urlSrv = this.environment.serverUrl;
	}

	getList(): Promise<any> {		
		this.slimLoadingBarService.start();
		return this.defaultPromise(this.http.get(this.urlSrv, {headers: this.getHeaderJwt()}));
	}

	getElem(id: number): Promise<any> {
		this.slimLoadingBarService.start();
		return this.defaultPromise(this.http.get(this.urlSrv+"/find/"+id, {headers: this.getHeaderJwt()}));
	}

	update(elem: any): Promise<any> {
		this.slimLoadingBarService.start();
		return this.defaultPromise(this.http.put(this.urlSrv+"/update", JSON.stringify(elem), {headers: this.getHeaderJwt()}));
	}

	insert(elem: any): Promise<any> {
		this.slimLoadingBarService.start();
		return this.defaultPromise(this.http.post(this.urlSrv+"/insert", JSON.stringify(elem), {headers: this.getHeaderJwt()}));		
	}

	remove(id: number): Promise<any> {
		this.slimLoadingBarService.start();
		return this.defaultPromise(this.http.delete(this.urlSrv+"/remove/"+id, {headers: this.getHeaderJwt()}));		
	}


	defaultPromise(prom: any): Promise<any> {
		return prom.toPromise()
		.then(response => response.json())
		.catch(this.handleError);
	}	
	
	private handleError(error: any): Promise<any> {
		alert('Erro ao conectar com o Servidor');	
		this.slimLoadingBarService.complete();	
		return Promise.reject(error.message || error);
	}

	private getHeaderJwt() {
		let jwt = this.localStorageService.get('jwt');
		if (jwt) {
			return new Headers({		
				'Content-Type': 'application/json',
				'X-Requested-With': jwt
			});
		}
	}
}