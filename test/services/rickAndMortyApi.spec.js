const {getResourcesFirstPageData,getResourcesAllData } = require('../../services/rickAndMortyApi')
const {expect} = require('chai')

describe('Rick and Morty Api Service', ()=>{
  const resources = ['character','episode','location']
  let resourcesFirstPageData
  describe('Get /Character/Episode/Location first page data from Api',()=>{
    it('Results length should match resources length (3)', async()=>{
      resourcesFirstPageData = await getResourcesFirstPageData({resources})      
      expect(resourcesFirstPageData.length).to.be.equal(resources.length)
    })
    it('Every page status must be 200', ()=>{
      let status = 200
      resourcesFirstPageData.map(page=>{
        if(page.status !== 200){
          status = page.status
        }
      })
      expect(status).to.be.equal(200,`Res status must be 200`)
    })
    it('Every page should have data', ()=>{
      resourcesFirstPageData.map(page=>{
        expect(page.data).to.not.be.empty
      })
    })
  })
})