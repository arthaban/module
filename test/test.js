const expect = require("chai").expect
const platzom = require("..").default // busca el que esta en la carpera lib definida en la package.jsom


describe('#platzom', function () {
  it('Descripcion del test 1 ', function () {
    const trans = platzom('Programar')
    expect(trans).to.equal('Program')
  })

  it('test 2', function () {
    const trans01 = platzom('Zorro')
    const trans02 = platzom('Zarpar')

    expect(trans01).to.equal('Zorrope')
    expect(trans02).to.equal('Zarppe')
  })


  it('test 3', function () {
    const trans01 = platzom('abecedario')
    expect(trans01).to.equal('abece-dario')
  })

  it('test 4', function () {
    const trans01 = platzom('sometemos')
    expect(trans01).to.equal('SoMeTeMoS')
  })
})
