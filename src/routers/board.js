const express = require("express");
const board = require("../usecases/board");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const allBoard = await board.getAll();
    res.json({
      success: true,
      message: "All Board",
      data: {
        board: allBoard,
      },
    });
  } catch (error) {
    res.json({
      success: false,
      message: "Something went wrong",
      error: error,
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const boardFound = await board.getById(id);
    res.json({
      success: true,
      message: "Board Found",
      data: {
        board: boardFound,
      },
    });
  } catch (error) {
    res.json({
      success: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
});

router.get("/event/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const boardFound = await board.getByEventId(id);

    res.json({
      success: true,
      message: "Board Found with event",
      data: {
        board: boardFound,
      },
    });
  } catch (error) {
    res.json({
      success: false,
      message: "Something went wrong while fetching board with event",
      error: error.message,
    });
  }
});

router.get("/service/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const boardFound = await board.getByServiceId(id);
    console.log(boardFound);

    res.json({
      success: true,
      message: "Board Found by service ID",
      data: {
        board: boardFound,
      },
    });
  } catch (error) {
    res.json({
      success: false,
      message: "Something went wrong while fetching board by service id",
      error: error.message,
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const createBoard = await board.create(data);
    res.json({
      success: true,
      message: "Board creado",
      data: {
        board: createBoard,
      },
    });
  } catch (error) {
    res.json({
      success: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;

    const boardUpdate = await board.updateById(id, body);

    res.json({
      success: true,
      message: `Board ${id} actualizado`,
      data: {
        board: boardUpdate,
      },
    });
  } catch (error) {
    res.json({
      success: false,
      message: "Error al actualizar category",
      error: error.message,
    });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteBoard = await board.deleteById(id);
    res.json({
      success: true,
      message: "Board borrado",
      data: {
        board: deleteBoard,
      },
    });
  } catch (error) {
    res.json({
      succes: false,
      message: "Error al borrar board",
      error: error.message,
    });
  }
});

module.exports = router;
