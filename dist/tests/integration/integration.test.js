"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = require("./config/helpers");
var HTTPStatus = require("http-status");
describe('Testes de Integracao do Controller', function () {
    'use strict';
    var config = require('../../config/env/config');
    var model = require('../../api/models');
    var id;
    var userTest = {
        id: 100,
        name: 'usuario Teste',
        email: 'teste@gmail.com',
        password: 'teste'
    };
    var userDefault = {
        id: 1,
        name: 'default user',
        email: 'default@gmail.com',
        password: 'default'
    };
    beforeEach(function (done) {
        model.user.destroy({
            where: {}
        })
            .then(function () {
            return model.user.create(userDefault);
        })
            .then(function (user) {
            model.user.create(userTest)
                .then(function () {
                done();
            });
        });
    });
    describe('Get /api/users', function () {
        it('Deve retornar todos os usuarios', function (done) {
            helpers_1.request(helpers_1.app)
                .get('/api/users/')
                .end(function (error, res) {
                helpers_1.expect(res.status).to.equal(HTTPStatus.OK);
                helpers_1.expect(res.body.payload).to.be.an('array');
                helpers_1.expect(res.body.payload[0].name).to.be.equal(userDefault.name);
                helpers_1.expect(res.body.payload[0].email).to.be.equal(userDefault.email);
                done(error);
            });
        });
    });
    describe('POST /api/users', function () {
        it('Deve inserir um usuario', function (done) {
            var user = {
                nome: 'teste'
            };
            helpers_1.request(helpers_1.app)
                .post('/api/users/')
                .send(user)
                .end(function (error, res) {
                helpers_1.expect(res.status).to.equal(HTTPStatus.OK);
                done(error);
            });
        });
    });
    describe('GET /api/users/:id', function () {
        it('Deve Retornar um usuario', function (done) {
            helpers_1.request(helpers_1.app)
                .get("/api/users/" + 1)
                .end(function (error, res) {
                helpers_1.expect(res.status).to.equal(200);
                done(error);
            });
        });
    });
    describe('POST /api/users/:id', function () {
        it('Deve editar um usuario', function (done) {
            var user = {
                nome: 'teste'
            };
            helpers_1.request(helpers_1.app)
                .put("/api/users/" + 1)
                .send(user)
                .end(function (error, res) {
                helpers_1.expect(res.status).to.equal(200);
                done(error);
            });
        });
    });
    describe('DELETE /api/users/:id', function () {
        it('Deve deletar um usuario', function (done) {
            helpers_1.request(helpers_1.app)
                .delete("/api/users/" + 1)
                .end(function (error, res) {
                helpers_1.expect(res.status).to.equal(200);
                done(error);
            });
        });
    });
});
